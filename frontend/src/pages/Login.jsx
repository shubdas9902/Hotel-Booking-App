import React, { useState } from 'react'
import login from '../hooks/useLogin'

const Login = () => {
    const {log}=login()
    const [input, setInputs] = useState({
        email:'',
        password: ''
    })

    const onSubmit =async(e) => {
        e.preventDefault();
        await log(input)
      };
  return (
    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
    <h2 className='text-3xl font-bold'>LogIn to Account</h2>
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
        <span>
            <button type="submit" className='bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl'>
                SignIn
            </button>
        </span>

</form>
  )
}

export default Login