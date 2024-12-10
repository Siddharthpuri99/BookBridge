import React, { useState } from 'react'
import {Link ,useNavigate} from "react-router-dom";
import axios from "axios"
import { authActions } from '../store/auth';
import { useDispatch } from 'react-redux';

function LogIn() {
  const[Values,setValues] = useState({
    name:"",
    password:"",
    
  });
  const change = (e) =>{
    const{name,value} = e.target;
    setValues({...Values,[name]:value});
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit = async() =>{
    try{
        if(Values.name===""  || Values.password===""){
          alert("All fields are required")
        }
        else{
          const response = await axios.post("http://localhost:1000/api/v1/sign-In",Values);
          alert("login !!!!");
          console.log(response);
          dispatch(authActions.login());
          dispatch(authActions.changeRole(response.data.role));
          localStorage.setItem("id",response.data.id);
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("role",response.data.role)
       
          navigate("/profile");
        }
    }
    catch(err){
      alert(err.response.data.message);
    }
  }
  return (
    <div className='h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center'>
    <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full mdLw-3/6 lg:w-2/6'>
    <p className='text-zinc-200 text-xl'>LogIn</p>
    <div className='mt-4'>
    <div>
      <label htmlFor="" className='text-zinc-400'>Username</label>
      <input type='text' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='username' name='name' required value={Values.name} onChange={change}
      />

    </div>
   
    
    <div className='mt-4'>
      <label htmlFor="" className='text-zinc-400'>Password</label>
      <input type='password' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='password' name='password' required value={Values.password} onChange={change}/>

    </div>
   
    <div className='mt-4'>
     <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-purple-700' onClick={submit}>LogIn</button>
    
    </div>
    <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold'>Or</p>
    <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold'> Dont have an account ? &nbsp;
      <Link to="/login" className='hover:text-blue-500'>
      <u>Sign Up</u>
      </Link>
    </p>
    
    </div>
    </div>
  </div>
  )
}

export default LogIn
