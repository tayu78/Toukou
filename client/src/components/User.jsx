import React,{useState} from 'react'
import { Avatar } from '@mui/material';
import axios from 'axios';
import { useUserContext } from '../hooks/useUserContext';
import { SERVER_DOMAIN } from '../cons/cons';

const User = ({user}) => {
    const [isFollow, setIsFollow] = useState(false)
    const { user: signInUser } = useUserContext();

    const handleClick =async () => {
        setIsFollow(prev => !prev)
        await axios.put(`${SERVER_DOMAIN}/users/${signInUser.userId}/follow`,user);
    }



  return (
    <div className='flex justify-between mt-5 bg-white  rounded mb-5 p-5 border '>
    <div className='flex items-center '>
        <Avatar />
              <p className='ml-5'>{user?.name}</p>
        </div>
          {isFollow ?  
              <button onClick={handleClick} className='bg-slate-600 rounded-full py-2 px-5 text-white'>unfollow</button>
              :
              <button onClick={handleClick} className='bg-red-500 rounded-full py-2 px-5 text-white'>follow</button>
     }
</div>
  )
}

export default User