const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;



//Handlbar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use(express.static(__dirname + '/public'));
// app.use(express.static ('public'));


app.get('/', function (req, res) {
  res.render('home',{
    title: "Home",
    nombre:"Julianito",
  });
}); 

app.get('/generic', function (req, res) {
  res.render('generic',{
    title: "Home",
    nombre:"Julianito",
  });
});
app.get('/elements', function (req, res) {
  res.render('elements',{
    title: "Home",
    nombre:"Julianito",});
  });
   
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, ()=>{
    console.log(`Server running on port http://localhost:${port}`)  // eslint-disable-line no-undef
})