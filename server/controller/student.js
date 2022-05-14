const studentsModels = require('../models/studentsModels')

exports.studenLogin = async (req, res) => {
  const student = await studentsModels.create({
    studenName: req.body.studentName,
    studentEmail: req.body.studentEmail,
    studentRoll: req.body.studentRoll,
    studentCnic: req.body.studentCnic,
    studentContact: req.body.studentContact
  })
  console.log('Student Saved')
  res.send(student)
}
exports.studentGetLogin = async (req, res) => {
  const studentgetmethod = await studentsModels.find()
  res.send(studentgetmethod)
  console.log(studentgetmethod)
}

exports.studentInfoUpdate = async (req, res) => {
  const studentID = { id: req.params.id }
  const studentObj = {
    studenName: req.body.StudentName,
    studentEmail: req.body.studentEmail,
    studentRoll: req.body.studentRoll,
    studentCnic: req.body.studentCnic,
    StudentContact: req.body.studentContact
  }
  const stdUpdateData = await studentsModels.findoneAndUpdate(
    studentID,
    studentObj
  )
  res.send(stdUpdateData)
  console.log(stdUpdateData)
}
