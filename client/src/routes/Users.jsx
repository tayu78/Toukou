import React,{useState,useEffect} from 'react'
import User from '../components/User'
import axios from 'axios';
import { SERVER_DOMAIN } from "../cons/cons";


const Users = ({isReccomend}) => {
    const [users, setUsers] = useState([]);

    const fetchUsers= async() => {
        const res = await axios.get(`${SERVER_DOMAIN}/users/getAllUsers`);
        setUsers(res.data)
        console.log("users",res.data)
        // setIsLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    }, [])


    return (
        <div className='w-2/5 mx-auto'>  
         {isReccomend ? users.slice(0, 1).map(user => {
             return <User user={user} />
         }) : 
         users.map((user) => {    
           return   <User user={user} />
        })  
        }    
           
      </div>
  )
}

export default Users