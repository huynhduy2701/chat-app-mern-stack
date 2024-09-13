import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast";


const useSendMessage = () => {
    const [loading,setLoading] = useState(false)  
    const {messages,setMessages,selectedConversation} = useConversation();

    const sendMessage = async(message)=>{
        setLoading(true);
        try {
            const res = await fetch(`api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({message})
            })
            // Xác định URL dựa trên port
            // const apiUrl = import.meta.env.MODE === 'development' 
            //     ? '/api/messages/send' 
            //     : 'http://localhost:5000/api/messages/send';
            
            // const res = await fetch(`${apiUrl}/${selectedConversation._id}`, {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ message }),
            // });
            console.log("res: " +res.url);
            const data = await res.json();
            console.log(data);
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages,data])
        } catch (error) {
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }
    return {sendMessage,loading}
}

export default useSendMessage