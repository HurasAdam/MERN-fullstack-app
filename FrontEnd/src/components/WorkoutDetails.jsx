import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
//date fns
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { formatDistanceToNow } from "date-fns/esm"
export const WorkoutDetails = ({ wo }) => {
const{dispatch}=useWorkoutsContext()
  const handleClick= ()=>{

    fetch(`http://127.0.0.1:4000/api/workouts/${wo._id}`,{
      method:"DELETE"
    })
  .then((res)=>{
  !res.ok?(console.log(res.status)):(
    dispatch({type:'DELETE_WORKOUT',payload:wo})
  )
  })

  

  

  }
    return (
      <div className="workout-details">
        <h4>{wo.title}</h4>
        <p><strong>Load (kg): </strong>{wo.load}</p>
        <p><strong>Number of reps: </strong>{wo.reps}</p>
        <p>{formatDistanceToNow(new Date(wo.createdAt),{addSuffix:true})}</p>
       <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
      </div>
    )
  }