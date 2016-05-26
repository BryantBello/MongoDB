var express = require('express');
var app = express();
var bodyParser = require('body-parser');​
//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "zoo";
var collections = ["animals"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
    console.log('Database Error:', err);
});​​



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));​




app.get('/', function(req, res) {

        

        }


 app.get('/home', function(req, res) {


            }​​​​
 app.listen(3000, function() {
                console.log('App running on port 3000!');
            });
