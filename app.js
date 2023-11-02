
// ? -------------1. Adım----------
const header =document.querySelector('.header')
header.style.backgroundColor = 'lightblue'
header.style.color = 'darkblue'
header.style.textAlign = 'center'

// ? -----------2.adım-------------

document.getElementById('title').textContent= "Javascript Dom Assignment 1"

document.getElementById('title').style.padding =".5rem"

// ?-----------3.adım --------------

const ul = document.querySelector(".nav-item")

ul.style.display = "flex"
ul.style.justifyContent = "center"
ul.style.gap = "20px"
ul.style.listStyleType = "none"
ul.style.padding ="1rem"


// ? --------- 4.adım ----------------

const text = document.querySelector('#username')

text.value = "Zeliha"
text.disabled = "true"

const password =document.querySelector("#password")

password.value = "123456"
password.disabled = "true"
password.type = "text"

// ? --------- 5.adım ----------------

const button = document.querySelector(".btn")

button.style.backgroundColor = "crimson"
button.style.color ="white"
button.style.padding =".2rem 1rem"
button.style.borderRadius = "8px"
button.style.border = "none"
button.style.cursor ="pointer"
button.textContent= "Giriş Yap"

// ? --------- 6.adım ---------------

const section =document.getElementById("projects")

section.firstElementChild.textContent ="Js Dom Projects"

// ? ----------7.adım ---------------

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];

const lastChildUl =section.lastElementChild

lastChildUl.innerHTML = "<li>Hello World!</li><li>Guess Number</li><li>Checkout Page</li><li>Gelir-Gider Projesi</li><li>Api Projects</li>"





   

