import { useState } from "react";
import { useAuthContext } from "../context/Authcontext"
import toast from "react-hot-toast";

const login=()=>{
    const[loading,setLoading]=useState(false);
    const {setAuthUser}= useAuthContext()
    const log=async({email,password})=>{
        const success= handleInputErrors({email,password})
        if(!success) {return;}
    
        setLoading(true)
        try {
            
            const res=await fetch("http://localhost:5000/api/auth/login",{
                method:"POST",
                credentials: "include",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email,password})
            })
    
            const data=await res.json();
            console.log(data)
            if(data.error){
                console.log(data.error)
                throw new Error(data.error)
            }
            
            setAuthUser(true)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
       }
       return {log}
    
}

export default login

function handleInputErrors({firstname,lastname,email,password,confirmPassword}){
    if(!email || !password ){
          toast.error("Please fill in all fields")
          return false
    }

    return true
}
    
