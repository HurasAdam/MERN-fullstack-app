import { useEffect } from "react";
import { WorkoutDetails } from "../components/WorkoutDetails";
import { WorkoutForm } from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
export const Home = () => {
const {workouts,dispatch}=useWorkoutsContext()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://127.0.0.1:4000/api/workouts")
      .then((res) => res.json())
      .then((data)=>dispatch({type:'SET_WORKOUTS',payload:data}))
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
