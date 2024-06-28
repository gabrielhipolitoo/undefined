export default function createGame() {
  const state = {
    players: {},
    items: {},
  }

  function movePlayer(command) {
    const { playerId, keyPressed } = command
    console.log('move-player player')
    // if (e.key === 'ArrowUp') {
    //   console.log((player.y -= 1))
    // }
    // if (e.key === 'ArrowDown') {
    //   teste.notifyAll('teste')
    // }
    const movements = {
      Arrowup(playerId) {
        console.log('Up')
      },
    }

    movements[keyPressed]
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
