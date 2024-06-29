class Observers {
  constructor() {
    this.observers = []
  }

  subscribe(obsorverFunctio) {
    this.observers.push(obsorverFunctio)
  }

  notifyAll(command) {
    console.log(`Notifying ${this.observers.length} observers`)
    this.observers.forEach((obsorverFunctio) => obsorverFunctio(command))
  }
}

export default Observers
