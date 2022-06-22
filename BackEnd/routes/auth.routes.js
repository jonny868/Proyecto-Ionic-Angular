const { Router } = require("express");
const ctrl = require('../controllers/auth.controller')
const User = require('../models/auth.model')
const router = Router()

router.get('/', ctrl.home)
router.post('/register', ctrl.register)
router.post('/login', ctrl.login)
router.get('/profile/:id', ctrl.verifyToken, ctrl.profile)


module.exports = router