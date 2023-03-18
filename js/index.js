/*const button = document.createElement('button')
button.innerText = 'Increase font size'
button.className = 'btn btn-primary'

const decreaseFontSizeButton = document.createElement('button')
decreaseFontSizeButton.innerText = 'Decrease font size'
decreaseFontSizeButton.className = 'btn btn-secondary'

const resetFontSizeButton = document.createElement('button')
resetFontSizeButton.innerText = 'Reset font size'
resetFontSizeButton.className = 'btn btn-danger'

const counterDisplay = document.createElement('p')
counterDisplay.innerText = '0'

const p = document.createElement('p')
p.innerText = 'Hello World'

let counter = 0
let fontSize = 1

function increaseFontSize() {
  fontSize = fontSize + 1
  p.style.fontSize = `${fontSize}em`
}

function decreaseFontSize() {
  fontSize = fontSize - 1
  p.style.fontSize = `${fontSize}em`
}

function resetFontSize() {
fontSize = 1
p.style.fontSize = '1em'
}

function increaseCounter() {
  counter = counter + 1
  counterDisplay.innerText = counter
}

function decreaseCounter() {
  counter = counter - 1
  counterDisplay.innerText = counter
}

function resetCounter() {
  counter = 0
  counterDisplay.innerText = counter
}

button.addEventListener('click', () => {'click', () => {
  increaseFontSize()
  increaseCounter()
})

decreaseFontSizeButton.addEventListener('click', () => {
  decreaseFontSize()
  decreaseCounter()
})

resetFontSizeButton.addEventListener('click', () => {
  resetFontSize()
  resetCounter()
})

document.body.appendChild(button)
document.body.appendChild(decreaseFontSizeButton)
document.body.appendChild(resetFontSizeButton)
document.body.appendChild(counterDisplay)
document.body.appendChild(p)
*/

class App {
  counter = 0
  fontSize = 1

  incrementCounter() {
    this.counter = this.counter + 1
  }

  decrementCounter() {
    this.counter = this.counter - 1
  }

  resetCounter() {
    this.counter = 0
  }

  increaseFontSize() {
    this.fontSize = this.fontSize + 1
  }

  decreaseFontSize() {
    this.fontSize = this.fontSize - 1
  }

  resetFontSize() {
    this.fontSize = 1
  }
}

bindEvent() {
  const increaseFontSizeButton = document.querySelector('.btn-primary')
  const decreaseFontSizeButton = document.querySelector('.btn-secondary')
  const resetFontSizeButton = document.querySelector('.btn-danger')

  increaseFontSizeButton.addEventListener('click', () => {
    this.increaseFontSize()
    this.incrementCounter()
    this.updateUI()
  })

  decreaseFontSizeButton.addEventListener('click', () => {
    this.decreaseFontSize()
    this.decrementCounter()
    this.updateUI()
  })

  resetFontSizeButton.addEventListener('click', () => {
    this.resetFontSize()
    this.resetCounter()
    this.updateUI()
  })
}

template = `
  <button class = "btn btn-primary">Increase Font Size</button>
  <button class = "btn btn-secondary">Decrease Font Size</button>
  <button class = "btn btn-danger">Reset Font Size</button>
  <p id = "counter-display">0</p>
  <p id = "message">Hello World</p>
`

render() {
  document.body.innerHTML = this.template
}

updateUI() {
document.querySelector('#counter-display').innerText = this.counter
document.querySelector('#message').style.fontSize = this.fontSize + 'em'
}

constructor() {
  this.render()
  this.bindEvents()
}

newApp ()
