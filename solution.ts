
// Problem 1
function filterEvenNumbers (numbers: number[]): number[] {
    const EvenNumbers = numbers.filter (num => num % 2 === 0);
    return EvenNumbers;
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// Problem 2
function reverseString (string: string): string {
    const Reverse = string.split('').reverse().join('');   
    return Reverse; 
}

// console.log(reverseString("typescript"));


// Problem 3
type StringOrNumber = string | number;

function checkType (value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } 
  else 
    return "Number";
}

// console.log(checkType("hello")); 
// console.log(checkType(42)); 


// Problem 4
function getProperty <T, K extends keyof T> (object: T, key: K): T[K] {
  return object[key];
}

const user = { 
    id: 1, 
    name: "John Doe", 
    age: 21 
};

// console.log(getProperty(user, "name"));

// Problem 5 
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus (book: Book) {
  return {
    ...book,
    isRead: true
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024
};

// console.log(toggleReadStatus(myBook));


// Problem 6
class Person {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor (name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    const Details = `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    return Details; 
  }
}

const student = new Student("Alice", 20, "A");

// console.log(student.getDetails());


// Problem 7
function getIntersection (array1: number[], array2: number[]): number[] {
    const Intersection = array1.filter(num => array2.includes(num));
  return Intersection;
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
