var express = require('express');
var router = express.Router();
var db = require('../models');

// Gets all data from the burgers table
router.get("/", function(req, res) {

    db.Burger.findAll({}).then(function(data) {
        res.render("index", { burgers: data });
    })
});

// Input new burgers
router.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    });
});

//Changes status of burger from devoured=false to devoured=true
router.put("/:id", function(req, res) {
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/");
    });
});

module.exports = router;