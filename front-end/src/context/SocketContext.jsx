import { createContext, useEffect, useState,useContext} from 'react'
import { useAuthContext } from './AuthContext';
export const SocketContext = createContext();
import io from 'socket.io-client'

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SocketContext)
}
// eslint-disable-next-line react/prop-types
export const SocketContextProvider=({children}) =>{
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser}= useAuthContext();
    useEffect(()=>{
        if (authUser) {
            const socket =io("http://localhost:5000",{
                query:{
                    userId:authUser._id
                }
            });

            setSocket(socket);
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })
            return ()=> socket.close();
        }else{
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    },[authUser])
    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
    )
}