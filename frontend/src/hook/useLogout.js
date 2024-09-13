import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading,setLoading] = useState(false) ;
    const {setAuthUser} = useAuthContext()
    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            const data = await res.json();
            console.log(data);
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message)
        }finally {
            setLoading(false);
        }
    }
    return {logout,loading }  ;  // return the logout function and loading state  ;  // logout function will be called when the user wants to log out  ;  // loading state will be true while the user is waiting for the logout to complete  ;  // the loading state will be false after the logout is complete  ;  // the user will be logged out if the logout is successful  ;  // an error message will be displayed if there is an error during the logout
}

export default useLogout