import Obsorvers from './Obsorvers.js'
export default function keyboardListener() {
  const obsorvers = new Obsorvers()

  function handleKeyboard(e) {
    const keyPressed = e.key
    const command = {
      type: 'move-player',
      playerId: '',
      keyPressed,
    }

    obsorvers.notifyAll(command)
  }

  document.addEventListener('keydown', handleKeyboard)

  return {
    obsorvers,
  }
}
