const Workout = require("../models/workoutModel");
const mongoose= require('mongoose');
// create workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  const workout = await Workout.create({
    title,
    reps,
    load,
  });
  res.status(200).json(workout);
};

//get all workouts

const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get a single workout

const getSingleWorkout = async (req, res) => {

    const {id}=req.params


if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json('error:requested resource does not exist')
}
const workout = await Workout.findOne({id})
    res.status(200).json(workout)
    
}

//delete workout

//update workout

module.exports = { createWorkout, getAllWorkouts, getSingleWorkout };
