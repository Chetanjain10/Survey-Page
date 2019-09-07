const mongoose =require('mongoose');

var customer = mongoose.model('customer',{

    name:{
        type:String,
    },
    number:{
        type: Number,
        minlength: 10,
        maxlength: 10
    },
    email:{
        type: String,
        minlength: 5
    },
    visits:{
        type:String
    },
    meal:{
        type: String
    },
    tasteOfFood:{
        type: String
    },
    serviceSpeed:{
        type: String
    },
    foodQuality:{
        type: String
    },
    foodPresentation:{
        type: String
    },
    cleaniness:{
        type: String
    },
    accomodation:{
        type: String
    },
    favDish:{
        type: String
    }

});

module.exports = {customer};