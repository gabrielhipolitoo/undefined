class Observers {
  constructor() {
    this.observers = []
  }

  subscribe(observerFunctio) {
    this.observers.push(observerFunctio)
  }

  notifyAll(command) {
    console.log(`Notifying ${this.observers.length} observers`)
    this.observers.forEach((observerFunctio) => observerFunctio(command))
  }

   seeSubscribe() {
      console.log(this.observers)   
  }
}

export default Observers
