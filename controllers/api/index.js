const router = require('express').Router();
const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const openaiRoutes = require('./openapi-routes');

// /api/*** /
router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/openai', openaiRoutes)

module.exports = router;
