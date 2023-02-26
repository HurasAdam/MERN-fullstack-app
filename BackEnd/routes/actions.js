const express = require("express");
const {createWorkout,getAllWorkouts,getSingleWorkout}= require('../controllers/workoutControllers')
const router = express.Router();



router.post('/',createWorkout)


router.get('/:id',getSingleWorkout)

router.get('/',getAllWorkouts)



module.exports = router;
