const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse);  // http://localhost:3000/courses
//router.route('/yeni').post(courseController.yeniKurs);  // http://localhost:3000/courses/yeni
router.route('/').get(courseController.getAllCourses);  // http://localhost:3000/courses
router.route('/:slug').get(courseController.getCourse);  // http://localhost:3000/courses

module.exports = router;