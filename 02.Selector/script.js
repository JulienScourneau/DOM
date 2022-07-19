let important = document.getElementsByClassName('important')
for(elem of important){
    elem.setAttribute('title', "This is an important item")
}

let img = document.querySelectorAll('img')
for(elem of img) {
    if(elem.getAttribute('title') !== "This is an important item"){
        elem.style.display = "none"
    }
}

let p = document.querySelectorAll('p')
for(elem of p) {
    if(elem.className !== ""){
        console.log("class: " + elem.className)
    } else {
        elem.style.color = randomColor()
    }
    console.log(elem.textContent)
}

function randomColor(){
    let maxVal = 0xFFFFFF
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)  
    return `#${randColor.toUpperCase()}`
}
