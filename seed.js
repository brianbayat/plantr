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




Gardner.create({
  name: 'John',
  age: 20
}).then(result => {
  console.log('gardner created');
})
.catch(err => {
  console.log(err);
});

Gardner.create({
  name: 'Brian',
  color: '21'
})
.then(result => {
  console.log('seed created');
})
.catch(err => {
  console.log(err);
});
Gardner.create({
  name: 'Cory',
  age: 22
}).then(result => {
  console.log('gardner created');
})
.catch(err => {
  console.log(err);
});
Gardner.create({
  name: 'Matt',
  age: 23
}).then(result => {
  console.log('gardner created');
})
.catch(err => {
  console.log(err);
});
Gardner.create({
  name: 'Scott',
  age: 24
}).then(result => {
  console.log('gardner created');
})
.catch(err => {
  console.log(err);
});



Plot.create({
  size: 1000
}).then(result => {
  console.log('plot created');
})
.catch(err => {
  console.log(err);
});

Plot.create({
  size: 2000,
  shaded: false
}).then(result => {
  console.log('plot created');
})
.catch(err => {
  console.log(err);
});
Plot.create({
  size: 3000
}).then(result => {
  console.log('plot created');
})
.catch(err => {
  console.log(err);
});
Plot.create({
  size: 4000,
  shaded: false
}).then(result => {
  console.log('plot created');
})
.catch(err => {
  console.log(err);
});
Plot.create({
  size: 5000
}).then(result => {
  console.log('plot created');
})
.catch(err => {
  console.log(err);
});
Plot.create({
  size: 6000,
  shaded: false
}).then(result => {
  console.log('plot created');
})
.catch(err => {
  console.log(err);
});




