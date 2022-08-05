import React,{useState} from 'react';
import axios from 'axios';

import Modal from '../components/Modal';
import FormInput from '../components/FormInput';
import { useUserContext } from '../hooks/useUserContext';
import { SERVER_DOMAIN } from '../cons/cons';

const EditUserModal = ({ setIsEditProfile }) => {
    const { user,setUser } = useUserContext();
    const [username, setUsername] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);
    const [description,setDiscription] = useState(user.description)

    const handleSave = async (e) => {
        e.preventDefault();
        const { data: updatedUser } = await axios.put(`${SERVER_DOMAIN}/users/updateUserProfile/${user.userId}`, { name: username, email, profilePicture, description })
        setUser(updatedUser)
        setIsEditProfile(false);
    }
    return (
        <>
        <Modal  modalSize='w-2/5 h-3/5' setIsOpen={setIsEditProfile}>
              <div className="p-10">     
                  <div className='flex justify-between'>    
                  <p className='text-2xl'>Edit Profile</p>           
              </div>
            <form onSubmit={handleSave}>
                <div className='mt-5'>
                    <FormInput label="name" value={username} setData={setUsername} inputWidth='w-2/3' labelWidth='w-1/4'/>
                    <FormInput label="email" value={email} setData={setEmail} width='w-full' inputWidth='w-2/3' labelWidth='w-1/4'/>
                    <FormInput label="profile Picture" value={profilePicture} setData={setProfilePicture} inputWidth='w-2/3' labelWidth='w-1/4'/>
                    <div className='flex'> 
                    <label className='w-1/4 text-right mr-3'>description</label>          
                    <textarea value={description} onChange={e=>setDiscription(e.target.value)} className='border rounded w-2/3' />
                    </div>
                 </div>   
             <div className='mt-5  pr-5 text-right'>
                <button type='submit' className='bg-red-500 text-white rounded-full px-7 py-2'>Save</button>                     
            </div>      
            </form>
              
          </div>
      </Modal>
        </>
   
  )
}

export default EditUserModal