let express = require('express');
let router = express.Router();

/* GET ps3. */
router.get('/', function(req, res, next) {
    // Return our render pug template
    res.render('ps3', { stringToDisplay: 'Hey Now!' });
});

router.get('/post', function(req, res){
    let body = req.body;
    console.log(body);
    // let newString = body["string"];
    // console.log(newString);
    // let lengthOfNewString = body["length"];
    console.log('String displayed');
    res.end();
});

router.post('/', function(req, res, next) {
    let body = req.body;
    let newString = body["string"];
    let lengthOfNewString = newString.length;
    console.log(newString + ' ' + lengthOfNewString);
    res.render('ps3', {stringToDisplay: JSON.stringify(newString), length: lengthOfNewString});
    // res.send({string: newString, length: lengthOfNewString});
});

router.get('/names/:name', function(req, res, next) {
    // Return our render pug template
    res.render('post', { aName: req.params.name });
});


module.exports = router;