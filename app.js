const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String  
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit ({
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid as a fruit.'
});

const kiwi = new Fruit ({
    name: 'Kiwi',
    rating: 4,
    review: `I don't get it.`
});

const orange = new Fruit ({
    name: 'Orange',
    rating: 8,
    review: `Makes for a great juice. Kinda sour though.`
});

const banana = new Fruit ({
    name: 'Banana',
    rating: 10,
    review: `The best fruit out there!.`
});

Fruit.insertMany([kiwi, orange, banana], function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully saved all the fruits to fruitsDB');
    }
});

/*

const personSchema = new mongoose.Schema ({
    name: String,
    age:  Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person ({
    name: 'John',
    age: 25
});

person.save();

*/