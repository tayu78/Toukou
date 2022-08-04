import React, { useEffect, useState,useCallback } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import { useUserContext } from '../hooks/useUserContext';



const Post = ({post,fetchPosts}) => {
  const [postedUser, setPostedUser] = useState("");
  const { user } = useUserContext();


    const fetchPostedUser = useCallback(async () => {
        const res = await axios.get(`http://localhost:8080/users/search/${post.userId}`);
        setPostedUser(res.data)
    }, [post.userId])
  
    const handleDelete = async () => {
      await axios.delete(`http://localhost:8080/posts/${post.postId}`);
      await fetchPosts();
    }
  
    useEffect(() => {
        fetchPostedUser()
    },[fetchPostedUser])

  return (
        <div key={post.postId} className='w-full  bg-white mx-auto rounded mb-5 p-5 border '>  
            <div className='flex items-center mb-5'>
              <Avatar className='mr-5'  src={postedUser?.profilePicture} />
              <span>{postedUser?.name ? postedUser.name : "noname"}</span>
            </div>
            <p className='mb-5'>{post.description}</p>
            {post.img && <img  className="mb-5" src={post.img} alt={"post-img-" + post.postId}></img>}
            <p className='text-xs text-slate-500 mb-5'>{new Date(post.timestamp).toDateString()}</p>
            <div className='flex justify-between'>  
        <FavoriteBorderIcon className='text-slate-300 favorite-icon cursor-pointer' />
        { post.userId === user.userId && <DeleteOutlineIcon onClick={handleDelete} className="text-slate-300 favorite-icon cursor-pointer" />}
            </div>
      </div> 
      
  )
}

export default Post