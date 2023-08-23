// const biggerNumber=(a:number,b:number):number=>{
// if(a>b){
//     return a;
// }
// else{return b;}
// }
// const result = biggerNumber(2, 5);
// console.log(result);

// const whichtype=(a:number):void=>{
//     if(a%2==0){
//         return console.log("the number is zugi");
//     }
//     else{
//         return console.log("the number is e zugi");;}
//     }
//     const resultwhichtype = whichtype(2);

// const lengthString=(a:string):void=>{
//     let length=a.length
//     console.log(`the length is ${length}`);
// }

//     const resultlenght = lengthString("hello");

// const createNumberArray = (n: number): number[] => {
//     const result: number[] = [];
//     for (let i:number = 1; i <= n; i++) {
//       result.push(i);
//     }
//     return result;
//   };

//   const numberArray = createNumberArray(5);
//   console.log(numberArray);

// const findMaxNumber = (numbers: number[]): number => {
//     if (numbers.length === 0) {
//         throw new Error("Array is empty");
//     }

//     let max = numbers[0];

//     numbers.forEach((el) => {
//         if (el >= max) {
//             max = el;
//         }
//     });

//     return max;
// };

// const array = [1, 2, 3, 4, 5];
// const maxNumber = findMaxNumber(array);
// console.log("The highest number is:", maxNumber);
// second option

// const findHighestNumber = (numbers: number[]): number => {
//     if (numbers.length === 0) {
//         throw new Error("Array is empty");
//     }

//     let highest = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > highest) {
//             highest = numbers[i];
//         }
//     }

//     return highest;
// };

// const numbersArray = [12, 5, 87, 42, 9];
// const highestNumber = findHighestNumber(numbersArray);
// console.log("The highest number is:", highestNumber);

// interface Person  {
//     Name: string,
//     Age: number,
//     isStudent: boolean
//   };
//   const printPerson = (person: Person): void => {
//     console.log(`Name: ${person.Name}`);
//     console.log(`Age: ${person.Age}`);
//     console.log(`isStudent: ${person.isStudent}`);
//   };
//   const isMinor=(person: Person): void => {
//     if(person.Age>18){
//         console.log("true")
//     }
//     else{    console.log("true")
// }
//   }

//   const person: Person = {
//     Name: "John",
//     Age: 6,
//     isStudent: false,
//   };

//   printPerson(person);
//   isMinor(person)

// interface Book {
//     Title: string;
//     Author: string;
//     Year: number;
// }

// interface Reader {
//     Name: string;
//     Age: number;
//     favoriteBook: Book;
// }

// const findOldestReader = (readers: Reader[]): Reader => {
//     let oldestReader = readers[0];

//     for (const reader of readers) {
//         if (reader.Age > oldestReader.Age) {
//             oldestReader = reader;
//         }
//     }

//     return oldestReader;
// };

// const findOldestBook = (readers: Reader[]): string => {
  

//     let oldestBook = readers[0];
//     let oldestYear = oldestBook.Age;

//     for (const reader of readers) {
//         if (reader.Age < oldestYear) {
//             oldestBook = reader;
//             oldestYear = reader.Age;
//         }
//     }

//     return oldestBook.Name;
// };

// const readers: Reader[] = [
//     { Name: "Alice", Age: 30,  favoriteBook: { Title: "Book1", Author: "Author1", Year: 2000 } },
//     { Name: "Bob", Age: 25,  favoriteBook: { Title: "Book2", Author: "Author2", Year: 2010 } },
//     { Name: "Charlie", Age: 35, favoriteBook: { Title: "Book3", Author: "Author3", Year: 1995 } },
// ];

// const oldestReader = findOldestReader(readers);
// const oldestBook = findOldestBook(readers);

// console.log("Oldest Reader:", oldestReader);
// console.log("Oldest Book:", oldestBook);

// task1

// const sumEvenNumbers = (numbers: number[]): number => {
//     let sum = 0;
  
//     for (const number of numbers) {
//       if (number % 2 === 0) {
//         sum += number;
//       }
//     }
  
//     return sum;
//   };
  
//   const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const evenSum = sumEvenNumbers(numbersArray);
//   console.log("Sum of even numbers:", evenSum);
  
// task2

//   const rectangle=(a:number,b:number):=>{
//     const area:number=a*b;
//     return area;
//   }
//   const rectangleArea=rectangle(2,5);
//   console.log(rectangleArea)

// task3
// const isPalindrome = (str: string): boolean => {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
//   };
  
//   const testStrings = ["abba", "hello", "racecar", "12321", "world"];
//   for (const str of testStrings) {
//     console.log(`${str} is palindrome: ${isPalindrome(str)}`);
//   }
// task4
// const capitalizeFirstLetter = (str: string): string => {
//     if (str.length === 0) {
//       return str;
//     }
    
//     const firstLetter = str.charAt(0).toUpperCase();
//     const restOfLetters = str.slice(1).toLowerCase();
    
//     return firstLetter + restOfLetters;
//   };
  
//   const testStrings = ["hello", "WORLD", "tEsT"];
//   for (const str of testStrings) {
//     console.log(capitalizeFirstLetter(str));
//   }
// task5
// const uniqArr = (arr: number[]): number[] => {
//     const uniqueSet: Set<number> = new Set();
//     const retArr: number[] = [];

//     arr.forEach((num: number): void => {
//         if (!uniqueSet.has(num)) {
//             uniqueSet.add(num);
//             retArr.push(num);
//         }
//     });

//     return retArr;
// }

// const numbersArray: number[] = [1, 2, 2, 3, 3, 4, 5, 5];
// const uniqueNumbersArray = uniqArr(numbersArray);
// console.log(uniqueNumbersArray); // Output: [1, 2, 3, 4, 5]
// task6
// interface Person {
//     firstName: string;
//     lastName: string;
// }

// interface Initials {
//     firstInitial: string;
//     lastInitial: string;
// }

// const getInitials = (person: Person): Initials => {
//     const firstInitial = person.firstName[0];
//     const lastInitial = person.lastName[0];
//     return { firstInitial, lastInitial };
// }

// const person: Person = { firstName: "John", lastName: "Doe" };
// const initials: Initials = getInitials(person);
// console.log(initials); 
// task7
// interface Person {
//     name: string;
//     age: number;
// }

// const average = (persons: Person[]): number => {
//     let sum: number = 0;
//     for (const person of persons) {
//         sum += person.age;
//     }
//     return sum / persons.length;
// }

// const persons: Person[] = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 40 }
// ];

// const ageAverage = average(persons);
// console.log("Average age:", ageAverage);
// task8
const findMinMax = (numbers: number[]): { max: number, min: number } => {
    let max: number = numbers[0];
    let min: number = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    return { max, min };
}
const numbersArray: number[] = [1, 2, 5, 5, 5, 6, 7, 8, 9, 9];
const result = findMinMax(numbersArray);
console.log("Maximum:", result.max);
console.log("Minimum:", result.min);



// // task9
// const printArrayReverse = (arr: any[]): void => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       console.log(arr[i]);
//     }
//   };
  
//   const numbersArray: number[] = [1, 2, 3, 4, 5];
//   printArrayReverse(numbersArray);
  