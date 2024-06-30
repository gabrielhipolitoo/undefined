import Observers from './Observers.js'

export default function createGame() {
  const observers = new Observers()
  const state = {
    players: {},
    fruits: {},
    screen: {
      width: 20,
      height: 20,
    },
  }

  function setState(newState) {
    Object.assign(state, newState)
  }

  function movePlayer(command) {
    observers.notifyAll({
      type: 'move-player',
      command,
    })
    console.log(command)
    const keyPressed = command.keyPressed
    const playerId = command.playerId
    const player = state['players'][playerId]
    const movements = {
      ArrowDown(player) {
        if (player.y < state.screen.height - 1) {
          player.y += 1
        }
      },
      ArrowUp(player) {
        if (player.y >= 0 + 1) {
          player.y -= 1
        }
      },
      ArrowLeft(player) {
        if (player.x - 1 >= 0) {
          player.x -= 1
        }
      },
      ArrowRight(player) {
        if (player.x + 1 < state.screen.width) {
          player.x += 1
        }
      },
    }

    const callMovements = movements[keyPressed]
    if (player && callMovements) {
      callMovements(player)
    }
    getFruits()
  }

  function fruitStart() {
    const frequency = 3000

    setInterval(addFruits, frequency)
  }
  function addFruits(command) {
    console.log(command)
    const fruitId = command ? command.id : Math.floor(Math.random() * 10000000)
    const fruitX = command
      ? command.x
      : Math.floor(Math.random() * state.screen.width)
    const fruitY = command
      ? command.y
      : Math.floor(Math.random() * state.screen.height)
    const color = 'green'

    state.fruits[fruitId] = {
      id: fruitId,
      color: color,
      x: fruitX,
      y: fruitY,
    }
    // const command = {
    //   id: fruitId,
    //   x: fruitX,
    //   y: fruitY,
    // }
    observers.notifyAll({
      type: 'add-fruits',
      id: fruitId,
      x: fruitX,
      y: fruitY,
    })
  }

  function getFruits(command) {
    for (const fruitId in state['fruits']) {
      const fruit = state['fruits'][fruitId]
      for (const playerId in state['players']) {
        const player = state['players'][playerId]
        if (player.x === fruit.x && player.y === fruit.y) {
          console.log('vc achou')
          removeFruits(player, fruit)
        }
      }
    }
    observers.notifyAll({ type: 'get-fruits', command })
  }

  function removeFruits(player, fruit) {
    const command = {
      fruit: fruit.id,
      player: player.id,
    }
    const fruitId = fruit.id
    delete state.fruits[fruitId]
  }
  function addPlayers(command) {
    console.log('Player adicionado', command.playerId)
    const playerId = command.playerId
    const playerColor = command.color
    const playerX = command.playerX
    const playerY = command.playerY

    state.players[playerId] = {
      id: playerId,
      color: playerColor,
      x: playerX,
      y: playerY,
    }
    observers.notifyAll({ type: 'add-player', command })
  }

  function desconectPlayer(command) {
    const player = command
    delete state.players[player]
    console.log('saiu', command)
    observers.notifyAll({ type: 'desconect-player', command })
  }
  return {
    state,
    addPlayers,
    movePlayer,
    desconectPlayer,
    setState,
    observers,
    addFruits,
    getFruits,
    fruitStart,
  }
}

//mover o player
