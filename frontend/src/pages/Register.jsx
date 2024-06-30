import React, { useState } from 'react'
import useSignUp from '../hooks/useSignUp';


const Register = () => {

    const [input, setInputs] = useState({
        firstname: '',
        lastname: '',
        email:'',
        password: '',
        confirmPassword: '',

    })
    
    const {loading,signup}=useSignUp()

    const onSubmit =async(e) => {
        e.preventDefault();
        await signup(input)
      };

  return (
    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
        <h2 className='text-3xl font-bold'>Create an Account</h2>
        <div className='flex flex-col md:flex-row gap-5'>
            <label className='text-gray-700 text-sm font-bold flex-1'>
                First Name 
                <input className='border rounded w-full py-1 px-2 font-normal' placeholder='Enter Firstname' value={input.firstname} onChange={(e) => setInputs({ ...input, firstname: e.target.value })} ></input>
            </label>
            <label className='text-gray-700 text-sm font-bold flex-1'>
                Last Name 
                <input className='border rounded w-full py-1 px-2 font-normal' placeholder='Enter Lastname' value={input.lastname} onChange={(e) => setInputs({ ...input, lastname: e.target.value })} ></input>
            </label>
        </div>
        <label className='text-gray-700 text-sm font-bold flex-1'>
                Email
                <input 
                type='email'
                className='border rounded w-full py-1 px-2 font-normal' placeholder='Enter email' value={input.email} onChange={(e) => setInputs({ ...input, email: e.target.value })} ></input>
            </label>
            <label className='text-gray-700 text-sm font-bold flex-1'>
                Password
                <input 
                type='password'
                className='border rounded w-full py-1 px-2 font-normal' placeholder='Enter Password' value={input.password} onChange={(e) => setInputs({ ...input, password: e.target.value })} ></input>
            </label>
            <label className='text-gray-700 text-sm font-bold flex-1'>
                ConfirmPassword
                <input 
                type='password'
                className='border rounded w-full py-1 px-2 font-normal' placeholder='Enter ConfirmPassword' value={input.confirmPassword} onChange={(e) => setInputs({ ...input, confirmPassword: e.target.value })} ></input>
            </label>
            <span>
                <button type="submit" className='bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl'>
                    Create Account
                </button>
            </span>

    </form>
  )
}

export default Register
