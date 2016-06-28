/*
 * environment dependant configuration: $export NODE_ENV=dev || $export NODE_ENV=production
 * config.server_manager = 'pm2' || 'nodemon'
 */

var config_env = require('./env/' + (process.env.NODE_ENV || 'dev'));
var auth_config = require('./auth.config.js');

var config = {
    app_name: 'SuperMEAN App',
    env: config_env,

    static_files: {
        head: {
            js: [
                '/bower/jquery/dist/jquery.min.js',
                '/bower/bootstrap/dist/js/bootstrap.min.js',
                '/bower/angular/angular.min.js'
            ],
            css: [
                '/bower/bootstrap/dist/css/bootstrap.min.css',
                '/bower/bootstrap/dist/css/bootstrap-theme.min.css',
                '/bower/font-awesome/css/font-awesome.min.css'
            ],
            img: []
        }

    },

    auth: auth_config

};

module.exports = config;
