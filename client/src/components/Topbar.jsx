import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';

const Topbar = () => {
  const { user } = useUserContext();
    return (
      <div className='flex items-center w-full h-14 bg-red-500 text-white fixed top-0 px-4 z-40'>
        <Link to="/" className='flex-3 font-bold'>Toukou</Link>
        <div className='flex-5'>Top</div>
        <div className='flex-4 flex justify-end'>
          <Link  to="/currentUser">
          <Avatar  src={user?.profilePicture}/>
          </Link>
          </div>
      </div>
    
  )
}

export default Topbar