
// Get all bootcamps
// GET /api/v1/bootcamps
// public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'list of all bootcamps'})
}


// Get a bootcamp with the ID provided
// GET /api/v1/bootcamps/:id
// public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show bootcamp with ID ${req.params.id}`})
}

// post a new bootcamp
// POST /api/v1/bootcamps/:id
// private

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'post new bootcamp'})
}


// update a bootcamp
// PUT /api/v1/bootcamps/:id
// private

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update bootcamp with ID ${req.params.id}`})
}



// delete a bootcamp
// DELETE /api/v1/bootcamps/:id
// private

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete bootcamp with ID ${req.params.id}`})
}



