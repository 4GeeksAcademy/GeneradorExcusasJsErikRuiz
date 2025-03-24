import './styles.css'
import { excuses } from './excuses.js'

function getRandomExcuse() {
  const index = Math.floor(Math.random() * excuses.length)
  return "Disculpa: " + excuses[index] // Concatenación de strings
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const excuseText = getRandomExcuse()
  document.getElementById('excuse').textContent = excuseText
})