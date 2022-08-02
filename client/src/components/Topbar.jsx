import React from 'react'
import Avatar from '@mui/material/Avatar';

const Topbar = () => {
    return (
      <div className='flex items-center w-full h-14 bg-red-500 text-white fixed top-0 px-4 z-50'>
        <div className='flex-3'>Toukou</div>
        <div className='flex-5'>Top</div>
        <div className='flex-4 flex justify-end'>
          <Avatar src="../images/pexels-grisha-chernigowsky-3981337.jpg"/>
          </div>
      </div>
    
  )
}

export default Topbar