const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
// create workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

const emptyFields=[]

if(!title){
  emptyFields.push('title')
}
if(!reps){
  emptyFields.push('reps')
}
if(!load){
  emptyFields.push('load')
}
if(emptyFields.length>0){
return res.status(400).json({error:'Please fill in all the fields',emptyFields})
}
try{
  const workout = await Workout.create({
    title,
    reps,
    load,
  });
  res.status(200).json(workout);
}
catch(error){
  res.status(400).json({error:error.message})
}


}
//get all workouts

const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.status(200).json(workouts);
};

//get a single workout

const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("error:requested resource does not exist");
  }
  const workout = await Workout.findOne({ id });
  res.status(200).json(workout);
};

//delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("error:requested resource does not exist");
  }
  const workout = await Workout.deleteOne({ id });
  res.status(200).json(workout)
};

//update workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  const { title, reps, load } = req.body;

  const updatedWorkout = await Workout.findOneAndUpdate({ id },{...req.body})



  res.status(200).json(updatedWorkout);
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
};
