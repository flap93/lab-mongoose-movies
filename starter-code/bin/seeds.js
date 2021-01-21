// iteration 1.1

const mongoose = require("mongoose");

require("../configs/db.config");

const Celebrity = require("../models/celebrity.model");

const celebrities = [
    { name: "DJ Khaled", 
        occupation: "record producer",
        catchPhrase: "Another One",
        },
        { name: "Ariana Grande", 
        occupation: "singer",
        catchPhrase: "Say It With Emojis",
        },
        { name: "Walter Cronkite", 
        occupation: "broadcaster",
        catchPhrase: "And That's The Way It Is",
        }
    
  
];

// script that gets run and actually seeds the database

// node bin/seeds.js

Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Successfully created ${celebritiesFromDB.length} celebrities.`);

    mongoose.connection.close();
  })
  .catch((err) => console.log(`Something went wrong with seeding the database: ${err}`));