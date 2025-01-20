 
// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model');
router.get('/', (req, res, next) => {
    Projects.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})
router.post('/', (req, res, next) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})
module.exports = router;
