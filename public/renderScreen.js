export default function renderScreen(screen, game, requestAnimationFrame) {
  const context = screen.getContext('2d')
  context.clearRect(0, 0, 30, 30)
  const state = game.state['players']

  for (const playerId in state) {
    const player = state[playerId]
    context.fillStyle = player.color
    context.fillRect(player.x, player.y, 1, 1)
  }

  requestAnimationFrame(() => {
    renderScreen(screen, game, requestAnimationFrame)
  })
}
