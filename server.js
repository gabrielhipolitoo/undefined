import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import chalk from 'chalk'

// game
import createGame from './public/createGame.js'
class CreateServer {
  constructor() {
    const dataConnection = this.startServer().sockets
    this.socketsOn(dataConnection)
  }

  startServer() {
    const app = express()
    const httpServer = http.createServer(app)
    const sockets = new Server(httpServer)
    const port = 3000

    app.use(express.static('public'))

    httpServer.listen(port, () => {
      console.log(chalk.yellow('Server running on port -->', port))
    })

    return {
      httpServer,
      sockets,
    }
  }

  socketsOn(sockets) {
    const game = createGame()
    game.obsorvers.subscribe((data) => {
      console.log('Emmiting -->', data.type)
      sockets.emit(data.type, data.command)
    })
    sockets.on('connection', (socket) => {
      const playerObj = {
        playerId: socket.id,
        playerColor: 'blue',
        playerX: 5,
        playerY: 8,
      }
      game.addPlayers(playerObj)

      socket.on('move-player', (command) => {
        command.playerId = socket.id
        command.type = 'move-player'
        game.movePlayer(command)
      })
    })

    sockets.emit('setup-game', game.state)
  }
}

const startar = new CreateServer()
