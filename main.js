import './styles.css'
import { subjects, verbs, objects, reasons } from './excuses.js'

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function generateExcuse() {
  const subject = subjects[getRandomIndex(subjects)]
  const verb = verbs[getRandomIndex(verbs)]
  const object = objects[getRandomIndex(objects)]
  const reason = reasons[getRandomIndex(reasons)]

 
  return `${subject} ${verb} ${object} ${reason}.`
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const excuse = generateExcuse()
  document.getElementById('excuse').textContent = excuse
})