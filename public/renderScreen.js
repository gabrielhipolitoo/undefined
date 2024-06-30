export default function renderScreen(screen, game, requestAnimationFrame,currentPlayer) {

  const context = screen.getContext('2d')
  context.clearRect(0, 0, 30, 30)
  const statePlayers = game.state['players']
  const stateFruits = game.state['fruits']

  for (const playerId in statePlayers) {
    const player = statePlayers[playerId]
    context.fillStyle = player.color
    context.fillRect(player.x, player.y, 1, 1)
    if(currentPlayer === player.id){
      statePlayers[currentPlayer].color = "yellow"
    }
  }

  for (const fruitId in stateFruits) {
    const fruit = stateFruits[fruitId]
    context.fillStyle = "green"
    context.fillRect(fruit.x, fruit.y, 1, 1)
  }
  requestAnimationFrame(() => {
    renderScreen(screen, game, requestAnimationFrame,currentPlayer)
  })
}
