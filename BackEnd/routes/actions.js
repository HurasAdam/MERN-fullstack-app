const express = require("express");
const {createWorkout,getAllWorkouts,getSingleWorkout,deleteWorkout}= require('../controllers/workoutControllers')
const router = express.Router();



router.post('/',createWorkout)


router.get('/:id',getSingleWorkout)

router.get('/',getAllWorkouts)

router.delete('/:id',deleteWorkout)

module.exports = router;
