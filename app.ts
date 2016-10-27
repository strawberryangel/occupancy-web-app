/// <reference path="/typings/node.d.ts" />

const debug = require('debug')('app:main')
const nconf = require('nconf')

////////////////////////////////////////////////////////////////////////////////
//
// Configuration
//
////////////////////////////////////////////////////////////////////////////////

nconf.argv().env().defaults({
    'port': 3002,
})

const port = nconf.get('port')

debug('port: ' + port)

////////////////////////////////////////////////////////////////////////////////
//
// Set up web server.
//
// Serve static files from ./static
//
////////////////////////////////////////////////////////////////////////////////

const express = require('express')          // call express
const compression = require('compression')  // Enable compression
const serveStatic = require('serve-static') // Serve static files.
const app = express()                       // define our app using express

app.use(compression())
app.use(serveStatic(__dirname + '/static', {index: ['index.html']}))

app.listen(port)

