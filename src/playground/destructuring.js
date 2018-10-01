//
//Object Destructuring
//

// const person = {
//   name: 'Ange',
//   age: 35,
//   location: {
//     city: 'San Jose',
//     temp: 28
//   }
// };

// //const name = person.name;

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}. `);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Publish' } = book.publisher;

// console.log(publisherName);


//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;
// //puede faltar los primeros con ,s o los ultimos sin dejarlo
// //const [, , state] = address;
// //const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);
// //Example:

// const item = ['Coffee (hot)', '$2.00', '$2.50','$2.75'];

// const [itemName, , mediumPrice] = item;

// // console.log(`A medium ${itemName} costs ${mediumPrice}`);