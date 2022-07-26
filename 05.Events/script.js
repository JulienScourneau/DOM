const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  displayLog(e.target.classList[1], false)
  displayNewSquare(e.target.classList[1])
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const clickOnDisplayedSquare = (e) => {
  alert(e.target.classList[1])
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}



document.body.addEventListener('keypress', event => {
  if (event.code === 'Space') {
    pressSpaceBar()
  }
})

document.addEventListener('keypress', event => {
  if (event.code === 'KeyI') {
    deleteLog()
  }
})

document.addEventListener('keypress', event => {
  if (event.code === 'KeyS')
    deleteSquare()
})

const pressSpaceBar = () => {
  document.body.style.backgroundColor = randomBackgroundColor()
  displayLog("green", true)

}

const deleteLog = () => {
  let logDiv = document.querySelector('main').lastElementChild.lastElementChild
  while (logDiv.firstChild) {
    logDiv.removeChild(logDiv.lastChild);
  }
}

const deleteSquare = () => {
  let squareDiv = document.querySelector('main').firstElementChild
  while (squareDiv.firstChild) {
    squareDiv.removeChild(squareDiv.lastChild)
  }
}

function displayNewSquare(color) {
  let squareDiv = document.querySelector('main').firstElementChild
  let div = document.createElement('div')
  div.className = "displayedsquare " + color
  squareDiv.addEventListener('click', clickOnDisplayedSquare)
  squareDiv.appendChild(div)
}

function displayLog(color, spaceBar) {
  let logDiv = document.querySelector('main').lastElementChild.lastElementChild
  let log = document.createElement('li')
  if (spaceBar == true) {
    log.innerHTML = "[" + getElapsedTime() + "] Generated a random background color"
  } else {
    log.innerHTML = "[" + getElapsedTime() + "] Created a new " + color + " square"
  }
  logDiv.appendChild(log)
}

function randomBackgroundColor() {
  let maxVal = 0xFFFFFF
  let randomNumber = Math.random() * maxVal
  randomNumber = Math.floor(randomNumber)
  randomNumber = randomNumber.toString(16)
  let randColor = randomNumber.padStart(6, 0)
  return `#${randColor.toUpperCase()}`
}