import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Modal from '../components/Modal';
import { useUserContext } from '../hooks/useUserContext';
import { Avatar } from '@mui/material';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useUserContext();
    

    const fetchPosts= async() => {
        const res = await axios.get("http://localhost:8080/posts/getAllPosts");
        setPosts(res.data)
        // setIsLoading(false);
    }
 

    const handlePost = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/posts/save", { userId: user.userId, description: postContent })
        await fetchPosts();
        setIsModalOpen(false);
        setPostContent("");
    }
    useEffect(() => {
        fetchPosts();
    }, [])

   
    
    return (
      <>
         <div > 
          {posts.map((post) => {
              return (
                  <>
                      <Post post={post} />
                  </>
              )
          })}
          <PostAddIcon onClick={()=>setIsModalOpen(true)} className='fixed right-10 bottom-10 cursor-pointer new-post-icon' />
            </div>  
            {isModalOpen &&
                <Modal setIsOpen={setIsModalOpen} >
                    <form onSubmit={handlePost}>
                    <div className='p-16'>
                        <div className='flex items-center mb-5'>
                            <Avatar className='mr-5'  src={user.profilePicture} />
                            <span>{user.name}</span>
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