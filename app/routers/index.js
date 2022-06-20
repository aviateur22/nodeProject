const express = require('express');
const router = express.Router();
const error = require('../controllers/error');
const notFound = require('../controllers/notFound');

/**path invalide */
router.use(notFound);

/** error */
router.use(error);


module.exports = router;
