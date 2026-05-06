
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


