import Obsorvers from './Obsorvers.js'

export default function createGame(screen) {
  const obsorvers = new Obsorvers()
  const state = {
    players: {},
    items: {},
    screen: {
      width: 20,
      height: 20,
    },
  }

  function setState(newState) {
    Object.assign(state, newState)
  }

  function movePlayer(command) {
    console.log(state)
    obsorvers.notifyAll({
      type: 'move-player',
      command,
    })
    const { playerId, keyPressed } = command
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
  }

  function addPlayers(command) {
    console.log('Player adicionado')
    const playerId = command.playerId
    const playerName = command.playerName
    const playerColor = command.playerColor
    const playerX = command.playerX
    const playerY = command.playerY

    state.players[playerId] = {
      name: playerName,
      color: playerColor,
      x: playerX,
      y: playerY,
    }
    obsorvers.notifyAll({ type: 'add-player', command })
  }

  function desconectPlayer(command) {
    const player = command
    delete state.players[player]
    console.log('saiu', command)
    obsorvers.notifyAll({ type: 'desconect-player', command })
  }
  return { state, addPlayers, movePlayer, desconectPlayer, setState, obsorvers }
}

//mover o player
