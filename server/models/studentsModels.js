const mongoose = require('mongoose')
const { Schema } = mongoose

const studentsSchema = new Schema({
  studenName: String,
  studentEmail: { type: String },
  studentRoll: { type: String },
  studentCnic: { type: String },
  StudentContact: { type: String }
})

const Student = mongoose.model('student', studentsSchema)

module.exports = Student
