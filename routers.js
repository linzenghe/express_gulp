/**
 * Created by Administrator on 2017/5/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

module.exports = router;