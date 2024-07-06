import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Authcontext";

const useSignUp = () => {
    const[loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext()
    const signup=async({firstname,lastname,email,password,confirmPassword})=>{
        const success= handleInputErrors({firstname,lastname,email,password,confirmPassword})
        if(!success) {return;}
    
        setLoading(true)
        try {
            
            const res=await fetch("http://localhost:5000/api/auth/register",{
                method:"POST",
                credentials: "include",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({firstname,lastname,email,password,confirmPassword})
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
       return {loading,signup}
    
}

export default useSignUp

function handleInputErrors({firstname,lastname,email,password,confirmPassword}){
    if(!firstname || !lastname || !password || !confirmPassword){
          toast.error("Please fill in all fields")
          return false
    }
    if(password!==confirmPassword){
        toast.error("Password does not match")
        return false
    }
    

    return true
}

