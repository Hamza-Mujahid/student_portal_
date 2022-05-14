const express = require('express')
const router = express.Router()
const studentsLogin = require('../controller/student')

router.post('/', studentsLogin.studenLogin)

router.get('/', studentsLogin.studentGetLogin)

router.put('/', studentsLogin.studentInfoUpdate)

module.exports = router
