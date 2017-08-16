var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Bootcamp SimpleExpress' });
});

router.get('/foo', function(req, res, next) { 'use strict';
res.send({"result": "success"});

});
module.exports = router;
