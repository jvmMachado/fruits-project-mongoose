const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Please, enter a name.']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    review: String  
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const apple = new Fruit ({
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

Fruit.insertMany([apple, kiwi, orange, banana], function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully saved all the fruits to fruitsDB');
    }
});

Fruit.find(function(err, fruits){
    if (err) {
        console.log(err)
    } else {
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });

        mongoose.connection.close();
    }
});