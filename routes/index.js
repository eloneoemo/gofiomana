var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.render('index', { title: 'Gofio Maná - en construcción...', logoTitle : 'Gofio Maná' });
});

module.exports = router;
