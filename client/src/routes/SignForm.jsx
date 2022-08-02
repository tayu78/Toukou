import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormInput from '../components/FormInput';
import { useUserContext } from "../hooks/useUserContext";
const SignForm = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser } = useUserContext()
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/users/save", { name: username, email, password });
        if (res) setUser(res.data)
    }

    useEffect(() => {
        if(user) navigate("/")
    }, [navigate, user])
    

  return (
      <>
          <div className='bg-white mx-auto w-3/5 border p-16'>
              <h2 className='text-center mb-5'>SignForm</h2>
              <form onSubmit={handleSubmit}>
                <FormInput  label="name" value={username} setData={setUserName} /> 
                <FormInput  label="email" value={email} setData={setEmail} /> 
                  <FormInput label="password" value={password} setData={setPassword} /> 
                  <div className='text-center mt-10'>
                  <button type="submit" className='bg-black text-white box-border border rounded-full w-56 py-2'>Sign Up</button>
                  </div>
              </form>
              
          </div>
          
     </>
  )
}

export default SignForm