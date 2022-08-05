import React, { useEffect, useState,useCallback } from 'react';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import Post from "../components/Post";
import { useUserContext } from '../hooks/useUserContext';
import RecommendedUser from '../components/RecommendedUser';
import { SERVER_DOMAIN } from '../cons/cons';
import EditUserModal from './EditUserModal';


const CurrentUser = () => {
    const [userPosts, setUserPosts] = useState([]);
    const [isEditProfile, setIsEditProfile] = useState(false);
    const { user } = useUserContext();

    const handleEditProfile = () => {
        setIsEditProfile(true);
    }
    const fetchUserPosts = useCallback(async () => {
        const res = await axios.get(`${SERVER_DOMAIN}/posts/getUsersPosts/${user.userId}`);
        if (res.data) {
            res.data.sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp));
            setUserPosts(res.data);
        }
    }, [user.userId]);

   

    
    useEffect(() => {
        fetchUserPosts();
    }, [fetchUserPosts])
    

  return (
      <div className='pl-80 flex' >
          <div className='flex-5'>
          <div className='flex bg-white h-52'>
              <div className='flex-2 flex items-center justify-center'>  
                <Avatar src={user.profilePicture} className='current-user-avatar' />
              </div>
              <div className='flex-5 pt-6 pl-6'>
                  <div className='h-10 flex items-center mb-5'>  
                          <p className='text-3xl mr-4'>{user.name}</p>
                          <EditIcon onClick={handleEditProfile} className="cursor-pointer" />
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
              <RecommendedUser />
          </div>
              
          {
              isEditProfile && <EditUserModal fetchUserPosts={fetchUserPosts} setIsEditProfile={setIsEditProfile} />
          }
              
      </div>
  )
}

export default CurrentUser