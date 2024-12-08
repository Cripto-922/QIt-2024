// let people = [];

// for (let i = 0; i < 3; i++) {
//     let name = prompt(`Адамның ${i + 1}-ші аты: `);
//     let age = prompt(`Адамның ${i + 1}-ші жасы: `);


//     people.push({ name: name, age: parseInt(age, 10) });
// }


// people.forEach(person => {
//     alert(`Аты: ${person.name}, Жасы: ${person.age}`);
// });


// let books = [
//     { title: "Titanic", author: "Aidyn", year: 2000 },
//     { title: "Green Book", author: "MEN", year: 2005 },
//     { title: "Harry Potter", author: "CR1PTO", year: 2010 }
// ];


// let bookTitle = prompt("Қай кітаптың жылын жаңартқыңыз келеді?");


// let book = books.find(b => b.title.toLowerCase() === bookTitle.toLowerCase());
// if (book) {
//     let newYear = prompt(`"${book.title}" кітабының жаңа жылын енгізіңіз:`);
//     book.year = parseInt(newYear, 10);
// } else {
//     alert("Кітап табылмады.");
// }


// books.forEach(b => {
//     alert(`Атауы: ${b.title}, Авторы: ${b.author}, Жылы: ${b.year}`);
// });


const students = [
    {name: " aidin", age: 18, grade: 100},
    {name: " MEKA", age: 11, grade: 50},
    {name: " erka", age: 20, grade: 90},
];

function age () {
    return students.sort((jasi) => jasi.age);
}

alert(`Ең жас студент: ${youngest.name}, Жасы: ${youngest.age}, Бағасы: ${youngest.grade}`);
alert(`Ең үлкен студент: ${oldest.name}, Жасы: ${oldest.age}, Бағасы: ${oldest.grade}`);

