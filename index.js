//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//Crear la aplicación
const app = express();

//Definimos el motor de plantillas
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estático
app.use(express.static(__dirname + '/public'));

//Configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

//Configurar mis rutas
app.get('/leonardo', (req, res)=>{
    res.render('davinci', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Leonardo Da Vinci'
    });
});

//Configurar mis rutas
app.get('/vincent', (req, res)=>{
    res.render('vangogh', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Vincent van Gogh'
    });
});

//Configurar mis rutas
app.get('/rafael', (req, res)=>{
    res.render('sanzio', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Rafael Sanzio'
    });
});

//Configurar mis rutas
app.get('/salvador', (req, res)=>{
    res.render('dali', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Salvador Dalí'
    });
});

//Arrancamos el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});