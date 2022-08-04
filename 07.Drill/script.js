let ul = document.querySelector("ul");
let ulChild = ul.childNodes;
// list.parentNode.replaceChild(copy, list);

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

    for (elem of nodeArr) {
        ul.appendChild(elem);
    }
};

const displayFirstElement = (array) => {
    for (let elem of array) {
        if (elem.nodeType === 1) {
            if (elem.textContent === "Fast and Furious") {
                ul.insertBefore(elem, ul.children[0]);
                elem.className = "important";
            }
        }
    }
};

const sortItem = (list) => {
    for (var i = list.children.length; i >= 0; i--) {
        list.appendChild(list.children[(Math.random() * i) | 0]);
    }
};

const setupEvent = (array) => {
    for (let elem of array) {
        if (elem.nodeType === 1) {
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
    }
    document.body.addEventListener("keyup", (event) => {
        if (event.key === "r") {
            sortItem(ul);
            displayFirstElement(ulChild)
        }
    });
};

removeDuplicate(ulChild);
setupEvent(ulChild);
displayFirstElement(ulChild);
