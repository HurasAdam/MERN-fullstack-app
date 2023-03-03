import { useState } from "react"
import {useAuthContext} from "../hooks/useAuthContext"

export const useLogin=()=>{


    const [isLoading,setIsLoading]=useState(null)
    const [error,setError]=useState(null)
    const {dispatch}=useAuthContext()

    const login= async(email,password)=>{
        setIsLoading(true)
        setError(null)
        const response =await fetch('http://127.0.0.1:4000/api/users/login',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })

        const data = await response.json()
        if(!response.ok){
            setError(data.error)
            setIsLoading(false)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(data))
            dispatch({type:"LOGIN",payload:data})
            setIsLoading(false)
        }

    }

return {login,error,isLoading}
}