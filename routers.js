/**
 * Created by Administrator on 2017/5/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.get('/partner/desktop',function (req,res,next) {
    res.render('desktop')
});

router.get('/order/list',function (req,res,next) {
    res.render('order/list')
});

router.get('/withdraw/list',function (req,res,next) {
    res.render('withdraw/list')
});
module.exports = router;