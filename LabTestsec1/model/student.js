const mongoose = require('mongoose')

const Schema = mongoose.Schema
const student = new Schema ({
    StudentID:{
        type: String,
        required: true
    },
    Name:{
        type: String,
        required: true
    },
    YearofStudy:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    }
}, {timestamps: true})

const students = mongoose.model('students' ,student)

module.exports = students;