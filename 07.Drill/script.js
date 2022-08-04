let ul = document.querySelector("ul");
let ulChild = ul.childNodes;

const removeDuplicate = (array) => {
    let arr = [];
    let nodeArr = [];
    for (elem of array) {
        if (elem.nodeType === 1) {
            if (arr.includes(elem.innerText)) continue;
            arr.push(elem.innerText);
            nodeArr.push(elem);
        }
    }
    while (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }

    for(elem of nodeArr){
        ul.appendChild(elem);
    }
};

removeDuplicate(ulChild);
console.log(ulChild);

for (let elem of ulChild) {
    if (elem.nodeType === 1) {
        if (elem.textContent === "Fast and Furious") {
            ul.insertBefore(elem, ul.children[0]);
            elem.classList.add("important");
        }
        elem.addEventListener("click", (event) => {
            if (event.target.textContent === "Fast and Furious") {
                alert(
                    "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
                );
            } else {
                alert(event.target.textContent);
            }
        });
    }
    // console.log("child: " + ulChild);
    // console.log("log: " + elem);
}
