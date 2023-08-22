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

interface Book {
    Title: string;
    Author: string;
    Year: number;
}

interface Reader {
    Name: string;
    Age: number;
    favoriteBook: Book;
}

const findOldestReader = (readers: Reader[]): Reader => {
    let oldestReader = readers[0];

    for (const reader of readers) {
        if (reader.Age > oldestReader.Age) {
            oldestReader = reader;
        }
    }

    return oldestReader;
};

const findOldestBook = (readers: Reader[]): string => {
  

    let oldestBook = readers[0];
    let oldestYear = oldestBook.Age;

    for (const reader of readers) {
        if (reader.Age < oldestYear) {
            oldestBook = reader;
            oldestYear = reader.Age;
        }
    }

    return oldestBook.Name;
};

const readers: Reader[] = [
    { Name: "Alice", Age: 30,  favoriteBook: { Title: "Book1", Author: "Author1", Year: 2000 } },
    { Name: "Bob", Age: 25,  favoriteBook: { Title: "Book2", Author: "Author2", Year: 2010 } },
    { Name: "Charlie", Age: 35, favoriteBook: { Title: "Book3", Author: "Author3", Year: 1995 } },
];

const oldestReader = findOldestReader(readers);
const oldestBook = findOldestBook(readers);

console.log("Oldest Reader:", oldestReader);
console.log("Oldest Book:", oldestBook);

