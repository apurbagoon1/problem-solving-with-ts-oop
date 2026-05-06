
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




