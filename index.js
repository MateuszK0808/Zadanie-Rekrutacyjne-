var express = require('express');
var kalkulator = require('./skrypty/kalkulator.js');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use('/skrypty', express.static(path.join(__dirname, 'skrypty')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(bodyParser.json());

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req,res) {
  kalkulator.zakres(Number(req.body.suma));
  kalkulator.czySzkoda(req.body.szkoda);
  kalkulator.ileRat(Number(req.body.rata));
  wynik = {}
  wynik.skl = kalkulator.obliczanieSkladki(stawka, szkoda, rata);
  res.send(wynik);
});
app.listen(1234);
