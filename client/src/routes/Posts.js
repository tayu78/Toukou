import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import PostAddIcon from '@mui/icons-material/PostAdd';
// import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import { useUserContext } from '../hooks/useUserContext';
import { Avatar } from '@mui/material';
// import Users from './Users';
import RecommendedUser from '../components/RecommendedUser';
import { SERVER_DOMAIN } from '../cons/cons';



const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useUserContext();
    

    const fetchPosts= async() => {
        const res = await axios.get(`${SERVER_DOMAIN}/posts/getAllPosts`);
        res.data.sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp));
        setPosts(res.data);
        // setIsLoading(false);
    }
 

    const handlePost = async (e) => {
        e.preventDefault();
        await axios.post(`${SERVER_DOMAIN}/posts/save`, { userId: user.userId, description: postContent })
        await fetchPosts();
        setIsModalOpen(false);
        setPostContent("");
    }


    
    useEffect(() => {
        fetchPosts();
    }, [])

   
    
    return (
      <>
        <div className='pl-80 flex ' > 
         <div className='flex-5'>
         {posts.map((post) => {
              return (
                  <>
                      <Post fetchPosts={fetchPosts} post={post} />
                  </>
              )
          })}    
                </div>
            <div className='flex-3 mx-5 w-4/5 '>
                    <RecommendedUser />
            </div>
          <PostAddIcon onClick={()=>setIsModalOpen(true)} className='fixed right-10 bottom-10 cursor-pointer new-post-icon' />
            </div>  
            {isModalOpen &&
                <Modal setIsOpen={setIsModalOpen} >
                    <form onSubmit={handlePost}>
                    <div className='p-16'>
                        <div className='flex items-center mb-5'>
                            <Avatar className='mr-5'  src={user?.profilePicture} />
                            <span>{user?.name}</span>
                        </div>
                        <textarea placeholder='share your feelings' value={postContent} onChange={e=>setPostContent(e.target.value)} className='border rouned w-full h-40 focus:outline-0' />
                        </div>
                        <div className='text-right pr-16'>
                            <button type='submit' className='border rounded-full bg-red-500 text-white w-32 py-2 '>toukou</button>
                        </div>
                    </form>
                </Modal>
            }
      </>
    
  )
}

export default Posts