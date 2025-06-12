import { useEffect, useState } from "react";

// custom hooks always starts with the "use" keyword
export default function useLocalStorageForEmail(){

    const [email,setEmail] = useState("");

    useEffect(()=>{
        const email = localStorage.getItem("email");
        if(email){
            setEmail(email);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("email", email);
    },[email]);

    return {email,setEmail}; // need to return the logic

}