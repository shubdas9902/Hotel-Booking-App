
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import { useAuthContext } from './context/Authcontext'
import Login from './pages/Login'

const App = () => {
  const {authUser}=useAuthContext()
  return (
    <Routes>
      <Route path='/' element={<Layout>
        <p>Home Page</p>
      </Layout>}/>
      <Route path='/search' element={<Layout>
        <p>Search Page</p>
      </Layout>}/>
      <Route path="/register" element={authUser ?<Navigate to='/'/>:<Layout><Register/></Layout>}/>
      <Route path="/signin" element={authUser ?<Navigate to='/'/>:<Layout><Login/></Layout>}/>
    </Routes>
  )
}

export default App