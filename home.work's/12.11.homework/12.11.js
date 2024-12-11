const text = document.getElementById ("text");
const button = document.getElementById ("textButton");
button.addEventListener('click', () => {
    text.textContent = "hello world!"
})
const themebutton = document.getElementById ("themeButton");
themebutton.addEventListener('click', () => {
    document.body.style.backgroundColor = "blue"
})

const div = document.querySelector(".mouseConteiner");
div.addEventListener('mouseenter', () => {
    div.style.color = "red"
})
div.addEventListener('mouseleave', () => {
    div.style.color = "black"
})

// const date = document.getElementById("date");
// date.addEventListener('click', () => {
//     date.
// })
const clear = document.getElementById ("clear");
clear.addEventListener("click", () => {
    location.reload();
})