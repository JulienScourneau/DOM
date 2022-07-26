let ol = document.querySelector('ol')
let lastLi = document.querySelector('ol').lastElementChild
ol.insertBefore(lastLi, ol.children[0])

let secondSection = document.querySelector('main').children[1]
let divLastSection = document.querySelector('main').lastElementChild.children[0]

let h2SecondSection = secondSection.querySelector('h2')
let h2LastSection = divLastSection.querySelector('h2')
divLastSection.insertBefore(h2SecondSection, divLastSection.children[0])
secondSection.insertBefore(h2LastSection, secondSection.children[0])

let lastSection = document.querySelector('main').lastElementChild
lastSection.parentElement.removeChild(lastSection)