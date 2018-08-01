var express = require('express');
var router = express.Router();
const searchController = require('../controllers/searchController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/items', searchController.getquery)

router.get('/api/items/:id', searchController.getproduct)

router.get('/api/items/:id/description', searchController.getproduct)


module.exports = router;
