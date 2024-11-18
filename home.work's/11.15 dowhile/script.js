const corrPassword = "amjilt_the_best"
let userPass;
const maxAttempts = 5;

for(let i = 0; i < maxAttempts; i++) {
    userPass = prompt("password engyz");
    if (userPass == corrPassword) {
        alert("password right");
        break;
    } else {
        alert("password wrong")
    }
    if (i == maxAttempts - 1) {
        alert("too many attempts")
    }
}




