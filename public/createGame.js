import Obsorvers from './Obsorvers.js'

export default function createGame(screen) {
  const state = {
    players: {},
    items: {},
  }

  function movePlayer(command) {
    const { playerId, keyPressed } = command
    const player = state['players'][playerId]
    console.log(keyPressed)
    console.log('move-player player')
    // if (e.key === 'ArrowUp') {
    //   console.log((player.y -= 1))
    // }
    // if (e.key === 'ArrowDown') {
    //   teste.notifyAll('teste')
    // }
    const movements = {
      ArrowDown(player) {
        if (player.y < screen.height - 1) {
          player.y += 1
          console.log(screen.height, player.y)
        }
      },
      ArrowUp(player) {
        if (player.y >= 0 + 1) {
          player.y -= 1
          console.log(screen.height, player.y)
        }
      },
      ArrowLeft(player) {
        if (player.x - 1 >= 0) {
          player.x -= 1
          console.log(screen.height, player.y)
        }
      },
      ArrowRight(player) {
        if (player.x + 1 < screen.width) {
          player.x += 1
        }
      },
    }

    const callMovements = movements[keyPressed]
    if (player && callMovements) {
      callMovements(player)
    }
  }

  function addPlayers(commad) {
    const playerId = commad.playerId
    const playerName = commad.playerName
    const playerColor = commad.playerColor
    const playerX = commad.playerX
    const playerY = commad.playerY

    state.players[playerId] = {
      name: playerName,
      color: playerColor,
      x: playerX,
      y: playerY,
    }
  }

  return { state, addPlayers, movePlayer }
}
