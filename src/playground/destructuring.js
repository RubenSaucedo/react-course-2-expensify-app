//
// ES6 OBJECT DESCSTRUCTURING
//

const person = {
    name: 'Ruben',
    age: 23,
    location: {
        city: 'Mexico',
        temp: 92
    }
};

// const name = person.name;
// const age = person.age;

//Destructuring object and Default values and renaming
const { name: firstname = 'Anonymous' , age } = person; 
console.log(`${firstname} is ${age}`);

// Destructuring an object inside an object
const { city, temp } = person.location;
if (city && temp) {
    console.log(`Temperature ${temp} in ${city}`);
}

// Rename the variables without problems: renaming on the destructuring
const { city: cityName, temp: temperature } = person.location;
if (cityName && temperature) {
    console.log(`Temperature ${temperature} in ${cityName}`);
}

// CHALLENGE

const book = {
    title: 'Ego si the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

//
// ES6 ARRAY DESCSTRUCTURING
//

const address = ['Periferico', 'Polanco', 'CMDX', '12345'];

// Destructuring array and defaults
const [, cityArray, state = 'Mexico'] = address;
console.log(`You are in ${cityArray}, ${state}`);

// CHALLENGUE

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, ,mediumCost] = item;
console.log(`A medium ${product} cost ${mediumCost}`);