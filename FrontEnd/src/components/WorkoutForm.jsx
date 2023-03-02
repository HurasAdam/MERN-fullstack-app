import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

export const WorkoutForm=()=>{
    const{dispatch}=useWorkoutsContext();
const [title,setTitle]=useState('')
const [load,setLoad]=useState('')
const [reps,setReps]=useState('')
const [error,setError]=useState(null)
const [emptyFields,setEmptyFields]=useState([])

const handleNewWorkout=async(e)=>{
e.preventDefault();

const res=await fetch('http://127.0.0.1:4000/api/workouts',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
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

return(

    <form className="create" action="">
        <h3>Add New Workout</h3>
        <label htmlFor="">Exercise Title</label>
        <input className={emptyFields.includes('title')?'error':''} type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label htmlFor="" >Load (in kg)</label>
        <input className={emptyFields.includes('load')?'error':''} type="number" value={load} onChange={(e)=>setLoad(e.target.value)} />
        <label htmlFor="">Amount of reps</label>
        <input className={emptyFields.includes('reps')?'error':''} type="number" value={reps} onChange={(e)=>setReps(e.target.value)}/>
        <button onClick={handleNewWorkout}>Add</button>
        {error&&<div className="error">{error}</div>}
    </form>
)
}