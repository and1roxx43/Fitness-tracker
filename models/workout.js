const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
    name: {
        type: String,
        trim: true,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: false
    },
    sets: {
        type: Number,
        required: false
    },
    distances: {
        type: Number,
        required: false
    }
}]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;