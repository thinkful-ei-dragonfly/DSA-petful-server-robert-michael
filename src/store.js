const queue = require('./queue/queue')

const store = {
  dogs: [],
  cats: [],
  history: [],
  people: [],
}

// add dogs to store

const dogsArray = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'http://bigbearzoo.org/wp-content/uploads/2012/11/image001.jpg',
    imageDescription: 'A very cute dog that is definitely not a fox.',
    name: 'Hamburger',
    sex: 'Male',
    age: 2,
    breed: 'Arctic Fox',
    story: 'Dog ate owner'
  },
  {
    imageURL: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
    imageDescription: 'A very cute dog that is definitely not a fox.',
    name: 'Derpy',
    sex: 'Male',
    age: 1,
    breed: 'Pug',
    story: 'Ran away'
  },
]

const dogs = new queue()

dogsArray.forEach(dog => dogs.enqueue(dog))

store.dogs = dogs

// add cats to store

const catArray = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://i.pinimg.com/236x/e4/4f/a4/e44fa48d7c5449e431c475596b7a4146.jpg', 
    imageDescription: 'A very happy cat.',
    name: 'Smiley',
    sex: 'Female',
    age: 2,
    breed: 'Siamese',
    story: 'Cat was too happy for previous owner'
  },
]

const cats = new queue()

catArray.forEach(cat => cats.enqueue(cat))

store.cats = cats

// add people to store

const people = new queue()

people.enqueue('rando')
people.enqueue('rando')
people.enqueue('rando')
people.enqueue('rando')

store.people = people

// add history to store

const history = new queue()

history.enqueue({'animal': 'dog', 'person': 'alex' });

store.history = history



module.exports = store