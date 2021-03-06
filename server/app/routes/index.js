/**
 * ***** /server/app/routes/index.js
 * SuperMEAN root endpoints
 */

var express = require('express');
var router = express.Router();
var chalk = require('chalk');

var emailjs = require("emailjs");

var userpass = process.env.EMAILJS_SUPERMEAN_WWW; //$export EMAILJS_UNIAPI_WWW=email@gmail.com:my_password:smtp.gmail.com

var usr = '',
    pass = '',
    host = '';

if (!userpass) {
    console.log(chalk.red('ERROR: EmailJS parameters not defined. Use $export EMAILJS_SUPERMEAN_WWW=email@gmail.com:my_password:smtp.gmail.com'));
} else {
    usr = userpass.split(':')[0];
    pass = userpass.split(':')[1];
    host = userpass.split(':')[2];
}

// console.log(JSON.stringify(userpass, null, 4));

var gmailSMTP = emailjs.server.connect({
    user: usr,
    password: pass,
    host: host,
    // port: 465,
    // port: 587,
    ssl: true
    // tls: {ciphers: 'SSLv3'},
    // authentication: [emailjs.authentication.PLAIN, emailjs.authentication.XOAUTH2],
    // timeout: 5000
});


/**
 * GET /
 * Homepage
 */
router.get('/', function (req, res) {
    'use strict';
    var vdata = {
        title: 'SuperMean - MEAN Stack Framework - API, Single Page App, Multi Page App',
        desc: 'SuperMEAN is powerfull framework for creating MEAN Stack Applications. Build your API, Single Page App or Multi Page App with this powerfull MEAN Stack.',
        keywords: 'supermean, mean stack, mongodb, expressjs, angularjs, nodejs'
    };
    res.render('public/index', vdata);
});

/**
 * POST /
 * Sending inquiry to email.
 */
router.post('/send', function (req, res) {
    'use strict';

    var data = req.body;
    // console.log(JSON.stringify(data, null, 4));

    var msg = data.message + '\n\nfrom: ' + data.email;

    gmailSMTP.send({
        from: data.name + '<' + data.email + '>',
        'reply-to': data.name + '<' + data.email + '>',
        to: usr,
        subject: 'SuperMEAN Inquiry',
        text: msg
    }, function (err, message) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        var vdata = {
            title: 'Sent email - Supermean',
            desc: 'SuperMEAN is powerfull framework for creating MEAN Stack Applications. Build your API, Single Page App or Multi Page App with this powerfull MEAN Stack.',
            keywords: 'supermean, mean stack, mongodb, expressjs, angularjs, nodejs'
        };
        res.render('public/emailsent', vdata);
    });


});










/* endpoint: GET /404 */
router.get('/404', function (req, res) {
    'use strict';
    var vdata = {
        title: 'Page Not Found',
        desc: 'Error 404: web page not found.',
        keywords: '404, not found'
    };
    res.status(404).render('_errors/error404', vdata);
});


module.exports = router;
