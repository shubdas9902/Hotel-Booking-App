import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'



const Layout = ({ children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <Hero/>
        <div className='container flex-1 mx-auto py-10'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout