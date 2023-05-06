import React, { useState } from 'react'

import loginImg from '../Images/pexels-nikolaos-dimou-2473183.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Login() {

    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const history=useNavigate();
    const pu=()=>{

        axios.post("http://localhost:8082/User/login",{Email:username,Password:password}).then((response)=>{
            if(response.data.length!=0)
            {
                
               history("/home");
               toast.success("Successfully Logged In !!")
               localStorage.setItem("User",response.data)
            }
            else
            {
                toast.error("Username or Password Incorrect !!")
            }
        })
       
       
    }
   
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-transparent flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
             
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="button" onClick={()=>{pu()}}>SIGNIN</button>
            </form>
           
        </div>
    </div>
  )
}