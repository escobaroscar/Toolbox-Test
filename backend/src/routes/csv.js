const {Router} = require('express');
const router = Router();

const {getFiles} = require('../controllers/csvController');

router.route('/')
    .get(getFiles)

module.exports = router;