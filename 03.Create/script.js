
var brightness = 0
addElement()
randomElem()

function randomColor() {
    var o = Math.round, random = Math.random, s = 255
    let r, g, b = 0
    r = o(random() * s)
    g = o(random() * s)
    b = o(random() * s)
    brightness = r * 0.299 + g * 0.587 + b * 0.114
    console.log(brightness)
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function addElement() {
    let newSection = document.createElement("section")
    let color = randomColor()
    newSection.style.backgroundColor = color
    let paragraph = document.createElement("p")
    paragraph.innerHTML = 'Scourneau Julien'
    console.log(color);
    if (brightness < 186) {
        paragraph.style.color = 'white'
    }
    newSection.appendChild(paragraph)
    document.querySelector('article').appendChild(newSection)
}

function randomElem() {
    document.querySelector("footer").style.position = "relative";
    document.querySelector("header").style.position = "relative";

    let main = document.querySelector('main')
    randomizeItem(main)

    let article = document.querySelector('article')
    randomizeItem(article)

    let body = document.querySelector("body")
    randomizeItem(body)
}

function randomizeItem(list) {
    let copy = list.cloneNode(true)
    for (var i = copy.children.length; i >= 0; i--) {
        copy.appendChild(copy.children[Math.random() * i | 0]);
    }
    return list.parentNode.replaceChild(copy, list);
}