const store = require('../store')

const catsService = {
  getCat() {
    return store.cats.peek()
  },
  deleteCat() {
    if (store.cats && store.people) {
      store.history.enqueue({animal: store.cats.peek(), person: store.people.peek()})
      store.people.dequeue()
      store.cats.dequeue()
      if (store.cats.isEmpty()) {
        store.populateCats()
      }
      return store.cats.peek()
    }
  },
}

module.exports = catsService
