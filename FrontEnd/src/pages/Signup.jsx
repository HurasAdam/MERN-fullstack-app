import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
export const Signup=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const {signup,isLoading,error}=useSignup()
const handleSubmit= async(e)=>{
e.preventDefault()
console.log(email, password)
await signup(email,password)
}

return(
    <form className="signup">
        <h3>Sign up</h3>
        <label htmlFor="">Email:</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}value={email} />
        <label htmlFor="">Password:</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}value={password} />

    <button disabled={isLoading} onClick={handleSubmit}>Sign up</button>
    {error&&<div className="error">{error}</div>}
    </form>
)

}