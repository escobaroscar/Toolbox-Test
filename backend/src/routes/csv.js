const {Router} = require('express');
const router = Router();

const {getFiles ,getFileOne} = require('../controllers/csvController');

router.route('/')
    .get(getFiles),

router.route('/:slug')
    .get(getFileOne)
    
module.exports = router;