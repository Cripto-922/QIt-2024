// test 1 

// let sum1 = +prompt("1nshy sandy engyz");
// let sum2 = +prompt("2nsh sandy engyz");
// let tanba = prompt(" + \n - \n *\n /\n  osi tanbalardyn breuin jaz tanba engyz");

// function calc (a, b, tanba) {
//     if (tanba == "+") {
//         return a + b;
//     } else  if (tanba == "-") {
//         return a - b;
//     } else if (tanba == "*") {
//         return a * b;
//     } else if (tanba == "/") {
//         return a / b;
//     } else {
//         alert ("tanba engyz");
//     }
// }

// alert ("jauaby  " + calc(sum1, sum2, tanba));



//test2

let tauarBaga = +prompt("tauardyn bagasyn jazynyz");
let zat = prompt("kansha zat satyp alasyz");

function market (x, z, y) {
    if (tauarBaga >="5000") {
        return tauarBaga * zat / 10;
    
    } else if (tauarBaga >= "10000") {
        return tauarBaga * zat / 20;

    } else if ( tauarBaga == "20000") {
        return tauarBaga * zat / 30;
        
    } else if (tauarBaga != "5000") {
        return tauarBaga * zat; 
    }
}

alert (" syzden  " + market(tauarBaga, zat)  + " tenge");



// tets 3 

// const number = 87;

// for (let i = 0; i <= 100; i++) {
//   let num = +prompt("1 - 100 aralygyndagy  jasyryn sandi tabyznz!");

//   if (num < number) {
//     alert(" jay jogary");
//   } else if (num > number) {
//     alert(" jay tomen");
//   } else if (num == number) {
//     alert("jaraysyz syz jasyrlgan sandy taptynyz");
//     break;
//   }
// }