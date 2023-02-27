
export const WorkoutDetails = ({ wo }) => {

    return (
      <div className="workout-details">
        <h4>{wo.title}</h4>
        <p><strong>Load (kg): </strong>{wo.load}</p>
        <p><strong>Number of reps: </strong>{wo.reps}</p>
        <p>{}</p>
      </div>
    )
  }