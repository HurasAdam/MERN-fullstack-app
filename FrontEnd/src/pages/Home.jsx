import { useEffect, useState } from "react";
import { WorkoutDetails } from "../components/WorkoutDetails";
export const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://127.0.0.1:4000/api/workouts")
      .then((res) => res.json())
      .then((data) => {setWorkouts(data);console.log(data)});
  };

  return (
    <div className="home">
      <h2>Home</h2>
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
          <WorkoutDetails key={workout._id} id={workout._id} wo={workout}/>
          ))}
      </div>
    </div>
  );
};
