import axios from 'axios'
import React, { useEffect, useState,useCallback } from 'react'
import Post from '../components/Post';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Modal from '../components/Modal';
import { useUserContext } from '../hooks/useUserContext';
import { Avatar } from '@mui/material';
import RecommendedUser from '../components/RecommendedUser';
import { SERVER_DOMAIN } from '../cons/cons';



const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [img, setImg] = useState("");
    const { user } = useUserContext();
    

    const fetchPosts= useCallback(async() => {
        const res = await axios.post(`${SERVER_DOMAIN}/posts/getFollowingUsersPosts`, user);
        res.data.sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp));
        setPosts(res.data);
        // setIsLoading(false);
    },[user])
 

    const handlePost = async (e) => {
        e.preventDefault();
        await axios.post(`${SERVER_DOMAIN}/posts/save`, { userId: user.userId, description: postContent ,img})
        await fetchPosts();
        setIsModalOpen(false);
        setPostContent("");
    }


    
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts])

   
    
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
                        <textarea placeholder='share your feelings' value={postContent} onChange={e=>setPostContent(e.target.value)} className='border rouned p-2 w-full h-40 focus:outline-0' />
                            <input placeholder="image url here" className="w-2/5 border rounded mt-2 p-2" onChange={e=>setImg(e.target.value)} />
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