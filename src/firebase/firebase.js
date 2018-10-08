import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses').on('child_removed', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//         description: 'Gas bill',
//         note: '',
//         Amount: '8700',
//         createdAt: 4700
//         }
// );

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// const expenses = [{
//     description: 'Rent',
//     note: 'Last month',
//     Amount: '350000',
//     createdAt: 4500
//     }, {
//     description: 'Water Bill',
//     note: 'OCtober ',
//     Amount: '4500',
//     createdAt: 8500
//     },{
//     description: 'Cable bill',
//     note: 'Pending',
//     Amount: '2489',
//     createdAt: 8752
//     }];

// expenses.forEach((expenseItem) => { 
//     database.ref('expenses').push(expenseItem);
// });


// const notes =[{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '76ise',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// database.ref().set({
//     name: 'Angelica Rojas',
//     age: '35',
//     stressLevel: 5,
//     job: {
//         title: 'Chief of Operations',
//         company: 'Nispero Labs'
//     },
//     location: {
//         city: 'San Jose',
//         country: 'Costa Rica'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Heredia'
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) =>{
//         console.log('Remove failed.', e);
// });