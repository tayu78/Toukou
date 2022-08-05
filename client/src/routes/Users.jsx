import React,{useState,useEffect,useCallback} from 'react'
import User from '../components/User'
import axios from 'axios';
import { SERVER_DOMAIN } from "../cons/cons";
import { useUserContext } from '../hooks/useUserContext';


const Users = ({isShort}) => {
    const [users, setUsers] = useState([]);
    const { user } = useUserContext();

    const fetchUsers= useCallback(async() => {
        const res = await axios.get(`${SERVER_DOMAIN}/users/getReccomendedUsers/${user.userId}`);
        setUsers(res.data);
        // setIsLoading(false);
    },[user.userId])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])


    return (
        <div className={isShort ? 'mx-auto' : 'w-2/5 mx-auto'}>  
         {isShort ? users.slice(0, 1).map(user => {
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