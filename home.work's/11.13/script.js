     // 1nsh tapsrma
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      continue; // Жұп сандарды өткізіп кетеміз
    }
    
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

