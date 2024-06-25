import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import chalk from 'chalk'

class CreateServer {
  constructor() {
    this.startServer()
    this.socketsOn(this.sockets)
  }

  startServer() {
    const app = express()
    const httpServer = http.createServer(app)
    const sockets = new Server(httpServer)
    try {
      const port = 3000
      httpServer.listen(port, () => {
        console.log(chalk.yellow('Server running on port -->', port))
      })
    } catch (error) {
      console.log(chalk.red('FALIED --> OPS O SERVIDOR FALHOU ! ', error))
    }

    return {
      sockets,
    }
  }

  socketsOn(sockets) {
    console.log('to aqui')
    console.log(sockets)
  }
}

const startar = new CreateServer()
