const store = require('../store')

const dogsService = {
  getDog() {
    return store.dogs.peek()
  },
  deleteDog() {
    if (store.dogs && store.people) {
      store.history.enqueue({animal: store.dogs.peek(), person: store.people.peek()})
      store.people.dequeue()
      store.dogs.dequeue()
      if (store.dogs.isEmpty()) {
        store.populateDogs()
      }
      return store.dogs.peek()
    }

  },
}

module.exports = dogsService
