var express = require('express');
var router = express.Router();


var newsFunction = require('../functions');

router.get('/news', function(req, res) {
  res.render('news');
});

router.get('/', (req, res) => {
  res.redirect('/api/sources');
});

router.get('/api/news', newsFunction.getnews);
router.get('/api/sources', newsFunction.getSources);
router.get('/api/sources/:id', newsFunction.getNewsFromSource);

module.exports = router;
