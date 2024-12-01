function fillAway() {
    let numbers = [];

    while(true) {
        let number = +prompt("san engyz");
        if (number == "0") break;
        numbers.push(Number(number));
    } 
    console.log(test(numbers))
}

function test (pop) {
    return pop.filter(element => element > 50);
}

fillAway();

let array = fillAway();

let kobeitu = fillAway.map((element) =>  element * element);
console.log(test(numbers))

//2 

// let numbers = [10, 20, 30];


// [40, 50, 60].forEach(num => {
//     numbers.push(num);
// });


// let sum = 0;
// numbers.forEach(num => {
//     sum += num;
// });

// console.log("Массив:", numbers); 
// console.log("Қосынды:", sum);  


//3 

// let numbers = [10, 20, 30, 40];


// let multipliedNumbers = numbers.map(num => num * 3);


// let filteredNumbers = multipliedNumbers.filter(num => num <= 100);

// console.log("Көбейтілген массив:", multipliedNumbers); 
// console.log("Фильтрленген массив:", filteredNumbers);   
