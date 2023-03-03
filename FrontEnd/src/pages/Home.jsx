import { useEffect } from "react";
import { WorkoutDetails } from "../components/WorkoutDetails";
import { WorkoutForm } from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import {useAuthContext} from "../hooks/useAuthContext"
export const Home = () => {
  const {user}= useAuthContext()
const {workouts,dispatch}=useWorkoutsContext()
  useEffect(() => {
    if(user){
      fetchData();
    }

  }, [user]);

  const fetchData = async() => {
    const response= await fetch("http://127.0.0.1:4000/api/workouts",{
      headers:{
        "Authorization":`Bearer ${user.token}` 
      }
    })
      const data =await response.json()
     if(response.ok){
      dispatch({type:"SET_WORKOUTS",payload:data})
     }
  };

  return (
    <div className="home">
     
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
          <WorkoutDetails key={workout._id} id={workout._id} wo={workout}/>
          ))}
      </div>
     <WorkoutForm/>
    </div>
  );
};
