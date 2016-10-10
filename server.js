var express  = require('express');
var util     = require('util')
var app      = express();
var bodyParser  = require('body-parser');

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var router = express.Router();

app.use(bodyParser.urlencoded({
  extended: true
}));

// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
  return res.send('It works.');
})

router.post('/', function(req, res) {
    var text = req.body.text;
    if(text == 'combo') {
      var resultText = ":elegiggle:" + "\n\n" + ":4head:" + "\n\n" + ":lul:" + "\n\n"

      var response = {
        'response_type': 'in_channel',
        'text': resultText
      }

      return res.send(response);
    } else if(text == 'pauperio') {
      var resultText = ":brokeback:" + "\n\n" + ":forseniq:" + "\n\n"

      var response = {
        'response_type': 'in_channel',
        'text': resultText
      } else if(text == 'tj') {
        var resultText = ":kreygasm:" + "\n\n" + ":gachigasm:" + "\n\n" + ":gachibald:" + "\n\n"

        var response = {
          'response_type': 'in_channel',
          'text': resultText
      }

      return res.send(response);
    }


    text = text.replace(/\s+/g, '').toUpperCase().split("");

    var resultText = text.join(" ");

    text.splice(0,1);
    text.forEach(function (letter) {
      resultText = resultText + "\n" + letter;
    });

    resultText = resultText + "\n\n" + ":tiagochamp: OMG IT WORKS :tiagochamp:";

    var response = {
      'response_type': 'in_channel',
      'text': resultText
    }

    res.send(response);
});

// ROUTES
app.use('/', router);

// START THE SERVER
app.listen(port, ip_address);
console.log('Magic happens on port ' + port);
