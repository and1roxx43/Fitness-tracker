const router = require("express").Router();
const { json } = require("body-parser");
const workout = require("../models");
const Workout = require("../models/workout");

router.get("api/workouts", async (req, res) => {
    try{
        const workouts = await Workout.find();
        return res.status(200).json(workouts)
    } catch(err){
        res.status(500).json(err);
    }
});

router.put("/api/workouts/:id", async (req, res) => {
    try{
        const workoutUpdate = await Workout.findByIdAndUpdate(
            req.params.id,
            { $push: {exercises: req.body}},
            {new: true }
        )
        return res.status(200).json(workoutUpdate);
    } catch(err) {
        res.status(500).json(err);
    }  
});

router.post("/api/workouts", async (req, res) => {
    try{
        const newWorkout = await Workout.create({
            day: Date.now()
        })
        return res.status(200).json(newWorkout);
    } catch(err) {
        json.status(500).json(err);
    }  
});

router.get("api/workouts/range", async (req, res) => {
    try{
        const workoutRange = await Workout.find({});
        return res.status(200).json(workoutRange);

    } catch(err){
        res.status(500).json(err);
    }
});

router.delete("api/workouts/:id", async (req, res) => {
    try{
        const deleteWorkout = await Workout.findOneAndRemove({
            _id: req.params.id
        })
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;