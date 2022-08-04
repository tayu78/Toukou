import React, { useEffect, useState,useCallback } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Post from "../components/Post";
import Users from "../routes/Users"
import { useUserContext } from '../hooks/useUserContext';
import RecommendedUser from '../components/RecommendedUser';



const CurrentUser = () => {
    const [userPosts, setUserPosts] = useState([]);
    const { user } = useUserContext();

    const fetchUserPosts = useCallback(async () => {
        const res = await axios.get(`http://localhost:8080/posts/getUsersPosts/${user.userId}`);
        if (res.data) {
            res.data.sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp));
            setUserPosts(res.data);
        }
            
        console.log("userposts: ", res);
    },[user.userId])

    useEffect(() => {
        fetchUserPosts();
    }, [fetchUserPosts])
    
    useEffect(() => {
        console.log("user imformation: ", user)
    },[])

  return (
      <div className='pl-80 flex' >
          <div className='flex-5'>
          <div className='flex bg-white h-52'>
              <div className='flex-2 flex items-center justify-center'>  
                <Avatar src={user.profilePicture} className='current-user-avatar' />
              </div>
              <div className='flex-5 pt-6 pl-6'>
                  <div className='h-10 flex items-center mb-5'>  
                     <p className='text-3xl'>Robert Firmino</p>
                  </div>
                  <div className='flex gap-5 mb-5'>
                      <p>{userPosts.length} posts</p>
                      <p>{user.follower.length} follower</p>
                      <p>{user.following.length} following</p>
                    </div>
                 <div>
                     <p>{user.description}</p>     
                 </div>  
              </div>
              </div>
              <div className='mt-10'>
                    {userPosts.map((post) => {
                    return (
                        <>
                         <Post fetchPosts={fetchUserPosts} post={post} />
                        </>
                    )
                })}    
              </div>
          </div>
            <div className='flex-3 mx-5 w-4/5'>
                {/* <h1>Reccomended Users</h1>
                    <Users isReccomend />
                <Link className='mt-5' to="/users">Show more Users</Link> */}
              <RecommendedUser />
            </div>
      </div>
  )
}

export default CurrentUser