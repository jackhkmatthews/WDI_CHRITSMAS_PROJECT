const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects.js');

//home page

router.get('/', (req, res) => res.render('home'));

//new

router.get('/projects/new', projectsController.new);

//create

router.post('/projects', projectsController.create);

//index

router.get('/projects', projectsController.index);

//show
//edit
//update
//delete

module.exports = router;
