import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext";
export const WorkoutForm=()=>{
    const{dispatch}=useWorkoutsContext();
const [title,setTitle]=useState('')
const [load,setLoad]=useState('')
const [reps,setReps]=useState('')
const [error,setError]=useState(null)
const [emptyFields,setEmptyFields]=useState([])
const {user}=useAuthContext()

const handleNewWorkout=async(e)=>{
e.preventDefault();
if(!user){
    setError('You must be loged in')
    return
}

const res=await fetch('http://127.0.0.1:4000/api/workouts',{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${user.token}`
    },
    body:JSON.stringify({title,load,reps})
})

const data = await res.json()
   
if(!data.ok){
    setError(data.error)
    setEmptyFields(data.emptyFields)
}
if(res.ok){
    setTitle('')
    setLoad('')
    setReps('')
    setError(null)
    setEmptyFields([])
    console.log('sucessfull')
    dispatch({type:"CREATE_WORKOUT",payload:data})
}
}

return (
    <form className="create">
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg):</label>
      <input 
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Reps:</label>
      <input 
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button onClick={handleNewWorkout}>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}