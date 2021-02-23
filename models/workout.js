const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
exercises: [{
    type: {
        type: String,
        trim: true,
        required: "excersise type" 
    },
    name: {
        type: String,
        trim: true,
        required: "excersise name " 
    }  
}]
})
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

