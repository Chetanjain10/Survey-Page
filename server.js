const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js')
const {customer} =require('./models/customer.js')


var app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req,res)=>{
    var Customer = new customer({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        visits: req.body.visits,
        meal: req.body.meal,
        tasteOfFood: req.body.tasteOfFood,
        serviceSpeed: req.body.serviceSpeed,
        foodQuality: req.body.foodQuality,
        foodPresentation: req.body.foodPresentation,
        cleaniness: req.body.cleaniness,
        accomodation: req.body.accomodation,
        favDish: req.body.favDish
    });
    Customer.save((err,doc)=>{
    if(!err){
        res.send("Thank You!!!")
        console.log(doc);
    }
    else{
        res.send("try again")
        console.log(JSON.stringify(err,undefined,2))
    }
    });
});


app.listen(3000,()=>{
    console.log('server started at port: 3000')
});