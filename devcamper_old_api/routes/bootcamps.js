const express = require('express');
const router = express.Router();
const {getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampsInRadius, bootcampPhotoUpload} = require('../controllers/bootcamps')
const courseRouter = require('./courses');
const Bootcamp = require('../models/Bootcamp')
const advancedResults = require('../middleware/advancedResults')


router.use('/:bootcampId/courses', courseRouter)
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)
router.route('/:id/photo').put(bootcampPhotoUpload)
router.route('/').get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(createBootcamp)
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)

module.exports = router