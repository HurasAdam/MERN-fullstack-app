import { useState } from "react";
import { Signup } from "./Signup";
import { useLogin } from "../hooks/useLogin";
export const Login=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const {login,isLoading,error}=useLogin()

const handleSubmit= async(e)=>{
e.preventDefault()
await login(email,password)

}

return(
    <form className="login">
        <h3>Log in</h3>
        <label htmlFor="">Email:</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}value={email} />
        <label htmlFor="">Password:</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}value={password} />

    <button onClick={handleSubmit}>Log in</button>
    {error&&<div>{error}</div>}
    </form>
)

}