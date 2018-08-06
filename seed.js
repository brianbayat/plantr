const { db, Vegetable, Plot, Gardner } = require('./models');

db.sync(/*{force: true}*/)
  .then(() => {
    console.log('connection successful');
  })
  .catch(err => {
    console.log(err);
  });

Vegetable.create({
  name: 'Carrot',
  color: 'Orange'
}).then(result => {
  console.log('seed created');
})
.catch(err => {
  console.log(err);
});

Vegetable.create({
  name: 'Green Beans',
  color: 'Green'
})
.then(result => {
  console.log('seed created');
})
.catch(err => {
  console.log(err);
});

Vegetable.create({
  name: 'Potato',
  color: 'Brown'
})
.then(result => {
  console.log('seed created');
})
.catch(err => {
  console.log(err);
})
.then(result => {
  console.log('seed created');
})
.catch(err => {
  console.log(err);
});

Vegetable.create({
  name: 'Spinach',
  color: 'Green'
})
.then(result => {
  console.log('seed created');
})
.catch(err => {
  console.log(err);
});

Vegetable.create({
  name: 'Broccoli',
  color: 'Green',
  planted_on: '2017-08-09 05:10:58'
})
.then(result => {
  console.log('seed created');
})
.catch(err => {
  console.log(err);
});




