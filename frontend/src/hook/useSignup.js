// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading,setLoading] = useState(false);
   const {authUser,setAuthUser}  = useAuthContext();
    const PORT =5000;
    const signup = async({fullName,username,password,confirmPassword,email,gender})=>{
        const success= handleInputErrors({fullName,username,password,confirmPassword,email,gender}) ;

        if (!success) {
            return
        }
        setLoading(true)
        try {
            const res = await fetch(`api/auth/signup`,{
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body :JSON.stringify({fullName,username,password,confirmPassword,email,gender})
            })
            const data = await res.json()
            console.log(data);
            if (data.error) {
                throw new Error(data.error);
            }

            //localstorage
            localStorage.setItem("chat-user",JSON.stringify(data));
            //context
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message) ;
        }finally{
        setLoading(false)

        }
    }
    return { signup, loading } ;  // return signup function and loading state  as object  }
}

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword,email,gender}){
    if (!fullName || !username || !password || !confirmPassword || !email ||!gender) {
        toast.error("Vui lòng điền đầy đủ thông tin");
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Mật khẩu không trùng nhau");
        return false;
    }
    if(password.length < 6){
        toast.error("Mật khẩu phải lớn hơn 6 kí tự");
        return false;
    }
    return true;
}