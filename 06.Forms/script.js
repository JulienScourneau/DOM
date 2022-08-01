let password = ""

const getNameInput = () => {
    let nameText = document.getElementById('display-firstname')
    console.log(document.getElementById('firstname').value);
    nameText.innerHTML = document.getElementById('firstname').value
}

const getAgeInput = () => {

    let age = document.getElementById('age')
    let ageText = document.getElementById('a-hard-truth')
    if (parseInt(age.value) >= 18) {

        ageText.style.visibility = 'visible'

        console.log(ageText);
        console.log('If conditions');
    } else {
        ageText.style.visibility = 'hidden'
        console.log('Else Conditions');
    }
}

const getPassWordInput = () => {
    password = document.getElementById('pwd')
    if (password.value.length <= 6) {
        password.style.border = "red dotted";
    } else {
        password.style.border = "rgb(133, 133, 133) inset 2px";
    }

}

const getPassWordConfirmInput = () => {
    passwordConfirm = document.getElementById('pwd-confirm')
    console.log(password.value);
    console.log(passwordConfirm.value);
    if (password.value != passwordConfirm.value) {
        console.log("If conditions");
        passwordConfirm.style.border = "red dotted";
    } else {
        passwordConfirm.style.border = "rgb(133, 133, 133) inset 2px";
    }
}

const toggle = (e) => {
    console.log(e)
    let body = document.body
    if (e.target.value == "dark") {
        body.style.backgroundColor = "gray"
        body.style.color = "white"
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }

}

const displayName = document.getElementById('firstname').addEventListener('keyup', event => {
    getNameInput()
})

const displayAgeText = document.getElementById('age').addEventListener('keyup', event => {
    getAgeInput()
})

const displayPassWord = document.getElementById('pwd').addEventListener('keyup', event => {
    getPassWordInput()
})

const displayPassWordConfirm = document.getElementById('pwd-confirm').addEventListener('keyup', event => {
    getPassWordConfirmInput()
})

const toggleDarkMode = document.getElementById('toggle-darkmode').addEventListener('change', event => {
    toggle(event)
    console.log(event.target.value);
})