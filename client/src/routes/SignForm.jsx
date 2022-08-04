import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import FormInput from '../components/FormInput';
import { useUserContext } from "../hooks/useUserContext";
import { SERVER_DOMAIN } from '../cons/cons';

const SignForm = ({isSignIn}) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState("");
    const { user, setUser } = useUserContext();
    
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        let res;
        if(isSignIn) res = await axios.post(`${SERVER_DOMAIN}/users/signIn`, { name: username,email,password });
        else res = await axios.post(`${SERVER_DOMAIN}/users/save`, { name: username, email, password });

        if (res.data) setUser(res.data)
        else setIsError(true);
    }

    useEffect(() => {
        console.log("user",user)
        if(user) navigate("/")
    }, [navigate, user])

    useEffect(() => {
        if (isError) setTimeout(() => {
            setIsError(false);
       },2000)
    })
    


  return (
      <>
          <div className='bg-white mx-auto w-3/5 border p-16'>
              <h2 className='text-center mb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h2>
              
            {isError && <p className='bg-red-400  p-2 rounded w-3/5 mx-auto mb-3 text-white text-center'>User not found. please try again.</p>}  
              <form className="text-center" onSubmit={handleSubmit}>
                <FormInput  label="name" value={username} setData={setUserName} /> 
                <FormInput  label="email" value={email} setData={setEmail} /> 
                  <FormInput label="password" value={password} setData={setPassword} /> 
                  <div className='text-center mt-10'>
                  <button type="submit" className='bg-black text-white box-border border rounded-full w-56 py-2'>{ isSignIn ? "Sign In" : "Sign Up"}</button>
                  </div>
              </form>
              <div className='text-center mt-3'>
              {isSignIn ? 
                  <>
                      <p>Not have an account ?</p>
                      <Link to="/signUp">Sign Up</Link>
                  </>
                  :
                  <>
                  <p>Already  have an account ?</p>
                      <Link to="/signIn">Sign In</Link>
                  </>
              
              }
              </div>
             
              
          </div>
          
     </>
  )
}

export default SignForm