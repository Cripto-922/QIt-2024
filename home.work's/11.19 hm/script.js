const number = 65;

let num = +prompt("1 - 100 aralygynda jasyryn sandyb tabyznz");

for (let i = 0; i <= 100; i++) {
    if(num < number) {
        alert("jasyrlygan san ulkenrek")
        continue;
    } else if (num > number) {
        alert("jasyrylgan san kishirek")
        continue;
    } else if (num == number) {
        alert("jaraysyz syz jasyrlgan sandy taptynyz");
        break;
    }
}

