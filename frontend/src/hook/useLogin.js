// eslint-disable-next-line no-unused-vars
import  { useState } from 'react'
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';
const useLogin = () => {
    const [loading,setLoading]= useState(false);
    const {setAuthUser} = useAuthContext();
    const login = async (username,password)=>{
        const success= handleInputErrors(username,password) ;
        if(!success){
            return ;
        }
        setLoading(true);
        try {
            const res =  await fetch("/api/auth/login",{
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body :JSON.stringify({username,password})
            })
            const data = await res.json()
            console.log(data);
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }
    return {login, loading} ;  // return login function and loading state  as object  }
}

export default useLogin

function handleInputErrors(username,password){
    if (!username || !password ) {
        toast.error("Vui lòng điền đầy đủ thông tin");
        return false;
    }
   
    return true;
}