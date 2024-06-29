import Observers from './Observers.js'
export default function keyboardListener() {
  const observers = new Observers()

  function handleKeyboard(e) {
    const keyPressed = e.key
    const command = {
      type: 'move-player',
      playerId: '',
      keyPressed,
    }

    observers.notifyAll(command)
  }

  document.addEventListener('keydown', handleKeyboard)

  return {
    observers,
  }
}
