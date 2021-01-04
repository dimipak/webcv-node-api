const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.use('/user/:id/skills', (req, res) => UserController.getUserSkills(req, res))

router.use('/user/:id', (req, res) => UserController.getUserDetails(req, res))


module.exports = router;