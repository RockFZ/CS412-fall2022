let express = require('express');
let router = express.Router();

/* GET ps3. */
router.get('/', function(req, res, next) {
    // Return our render pug template
    res.render('ps3', { stringToDisplay: 'Hey Now!' });
})

    .post('/', function(req, res, next) {

    // Return and render it
    res.render('post', { newString: (JSON.stringify(req.body)), lengthOfNewString: JSON.stringify(req.body).length });
})

    .get('/names/:name', function(req, res, next) {
    // Return our render pug template

        res.render('post', { aName: name });
});
module.exports = router;