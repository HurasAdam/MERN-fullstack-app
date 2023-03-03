const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const requireAuth=require('../middleware/requireAuth')


const router = express.Router();

router.use(requireAuth)

router.post("/", createWorkout);

router.get("/:id", getSingleWorkout);

router.get("/", getAllWorkouts);

router.delete("/:id", deleteWorkout);

router.put("/:id", updateWorkout);
module.exports = router;
