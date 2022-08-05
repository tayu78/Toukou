import React from 'react';
import {Link} from 'react-router-dom';
import Users from "../routes/Users";

const RecommendedUser = () => {
  return (
      <div className=' bg-white  rounded mb-5 border p-6'>
          <h1>Reccomended Users</h1>
         <Users isReccomend />
        <Link className='mt-5 bg-red-400 rounded-full text-white px-5 py-2' to="/users">Show more Users</Link>
         </div>
  )
}

export default RecommendedUser