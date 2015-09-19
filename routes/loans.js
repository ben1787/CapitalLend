var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Loan = require('../models/Loan.js');

/* GET loans listing. */
router.get('/', function(req, res, next) {
  Loan.find(function (err, loans) {
    if (err) return next(err);
    res.json(loans);
  })
});

/* GET /loans/id */
router.get('/:id', function(req, res, next) {
    Loan.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Post loans */
router.post('/', function(req, res, next) {
  Loan.create(function (err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

/* Update loans */
router.post('/', function(req, res, next) {
    Loan.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        res.json(post);
    })
});

module.exports = router;
