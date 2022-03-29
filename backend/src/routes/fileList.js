const {Router} = require('express');
const router = Router();

const {getFileOne} = require('../controllers/csvController');


router.route('/')
    .get(getFileOne)
    
module.exports = router;