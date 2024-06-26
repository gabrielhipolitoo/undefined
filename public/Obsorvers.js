class Obsorvers {
  constructor() {
    this.obsorvers = []
  }

  subscribe(obsorverFunctio) {
    this.obsorvers.push(obsorverFunctio)
  }

  notifyAll(command) {
    console.log(`Notifying ${this.obsorvers.length} obsorvers`)
    this.obsorvers.forEach((obsorverFunctio) => obsorverFunctio(command))
  }
}

export default Obsorvers
