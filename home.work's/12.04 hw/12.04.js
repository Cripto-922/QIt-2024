    // example 1

// const numbers = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// };

// const { a, b, c, d} = numbers;
// console.log(a + c + b + d);


    /// example2

// const numbers1 = {
//     a:1,
//     b:2
// };

// const numbers2 = {
//     c:3,
//     d:4
// }

// const numbers3 = { ...numbers1, ...numbers2};
// console.log(numbers3);


       /// example 3

// const students = [
//     {
//         id:1, name: "Aidyn"
//     },
//     {
//         id:2, name: "ERku"
//     },
//     {
//         id:3, name: "NURSU"
//     },
//     {
//         id:4, name: "MUKHY"
//     },
//     {
//         id:5, name: "MEKA"
//     }
// ];

// function evenNumbers() {
//     return students.filter((element) => element.id % 2 == 0);
// }

// function oddNumbers() {
//     return students.filter((element) => element.id % 2 != 0);
// }


// console.log(evenNumbers());
// console.log(oddNumbers());


const libirary = {
    name: "Alatau",
    books: [
        {
            name: "Harry Potter A", pages: 300,
        },
        {
            name: "Titanic B", pages: 200,
        },
        {
            name: "Risale - Nur", pages: 500,
        },
        {
            name: "Goal", pages: 240,
        },
        {
            name: "ME and You", pages: 150,
        }
    ],
};

function avaragePages() {
    return libirary.pages.reduce((element) => element.pages)
}

console.log(avaragePages());


