const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [ true, "name is required must be more than 3 characters"] },

    type: {
        type: String ,
        required: [ true, "type is required"] },
    
    description: { 
        type: String,
        required: [ true, "description is required must be more than 3 characters"] },

    skills_1: { 
        type: String,
        required: [ true, "Skills required"] },
    
    skills_2: { 
        type: String,
        required: [ true, "Skills required"] },
    
    skills_3: { 
        type: String,
        required: [ true, "Skills required"] },

}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);