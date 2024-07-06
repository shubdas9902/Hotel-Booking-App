import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/Authcontext'
import logout from '../hooks/useLogout.js'


const Header = () => {
  const {authUser}=useAuthContext()
  const {logot}=logout()
  return (
    <div className='bg-blue-800 py-6'>
        <div className="container mx-auto flex justify-between">
            <span className="text-3xl text-white font-bold tracking-tight">
               <Link to="/">MernHolidays.com</Link>
            </span>
            <span className='flex space-x-2'>
              {authUser ? <>
                <Link to='/bookings' className='flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100'>
                  Bookings
                </Link>
                <Link to='/hotels' className='flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100'>
                  Hotels
                </Link>
                <button className='flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100' onClick={logot}> Sign Out </button>

              </>:
                <><Link to='/register' className='flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100'>
                  Register
                </Link>
                <Link to='/signin' className='flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100'>
                 SignIn
                </Link>
                </>
                }
            </span>
            

        </div>
    </div>
  )
}

export default Header