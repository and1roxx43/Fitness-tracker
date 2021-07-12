 const router = require("express").Router();
 const Workout = require("../models/workout");

router.get("/api/workouts", async (req, res) => {
    try{
        const workoutData = await Workout.find();
         res.status(200).json(workoutData)
    } catch(err){
        res.status(500).json(err);
    }
});

router.put("/api/workouts/:id", async ({ body, params}, res) => {
    try{
        const workoutUpdate = await Workout.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body}}
        )
         res.status(200).json(workoutUpdate);
    } catch(err) {
        res.status(500).json(err);
    }  
});

router.post("/api/workouts", async ({ body }, res) => {
    try{
        const newWorkout = await Workout.create({ body });
        res.status(200).json(newWorkout);
    } catch(err) {
        json.status(500).json(err);
    }  
});

router.get("/api/workouts/range", async (req, res) => {
    try{
        const workoutRange = await Workout.find();
        res.status(200).json(workoutRange);

    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;