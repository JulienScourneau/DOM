var brightness = 0

let learners = [
    "Guillaume",
    "Rinaldo",
    "Benoit",
    "Xavier.B",
    "Xavier.C",
    "Daniela",
    "Anthony",
    "Sophie",
    "Axel",
    "Hazem",
    "Kamilla",
    "Stéphanie",
    "Julien.E",
    "Julien.S",
    "Doriano",
    "Eddy",
    "Selim",
    "Titouan",
    "Vincent",
    "Dylan",
    "Lucas"
];

addElement()
randomElem()

/** 
 * Generate random color
 */
function randomColor() {
    var o = Math.round, random = Math.random, s = 255
    r = o(random() * s)
    g = o(random() * s)
    b = o(random() * s)
    brightness = r * 0.299 + g * 0.587 + b * 0.114
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function addElement() {
    for (elem of learners) {
        let newSection = document.createElement("section")
        newSection.style.backgroundColor = randomColor()
        let paragraph = document.createElement("p")
        paragraph.innerHTML = elem
        if (brightness < 140) {
            paragraph.style.color = 'white'
        }
        newSection.appendChild(paragraph)
        document.querySelector('article').appendChild(newSection)
    }
}

function randomElem() {
    let body = document.querySelector("body")
    let main = body.children[1]
    let article = main.children[1]

    main.style.margin = 0
    body.children[0].style.position = "relative";
    body.children[2].style.position = "relative";

    randomizeItem(article)
    randomizeItem(main)
    randomizeItem(body)
}

function randomizeItem(list) {
    let copy = list.cloneNode(true)
    for (var i = copy.children.length; i >= 0; i--) {
        copy.appendChild(copy.children[Math.random() * i | 0]);
    }
    return list.parentNode.replaceChild(copy, list);
}