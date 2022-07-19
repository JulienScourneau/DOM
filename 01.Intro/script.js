
console.log(document.querySelector('title'))
document.querySelector('title').textContent = "Modifying the DOM"

document.body.style.backgroundColor = randomBackgroundColor()

let allChildren = document.querySelector("body").childNodes
for(elem of allChildren){
    console.log(elem);
}

function randomBackgroundColor(){
    let maxVal = 0xFFFFFF
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)  
    return `#${randColor.toUpperCase()}`
}