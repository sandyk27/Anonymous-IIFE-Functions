
//1. Print odd numbers in an array

let numberArray = [1, 2, 3, 4, 5, 6, 7,58,12,256];

const arr =  numberArray.filter((item) => {

    return item % 2 !== 0
});
console.log(`Print in Odd Numbers: ${arr}`);

//2.Convert all the strings to title caps in a string array

let stringArray = ["santhoshkumar", "is", "a", "guvi", "student"]

stringArray = stringArray.map((item) => {

    return item.toUpperCase()

});

console.log(`Converted String Array is: ${stringArray}`)

//3.Sum of all numbers in an array
//using numArray Defined Above

let sum = numberArray.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log(`Sum of elements in Number Array: ${sum}`);

//4.Return all the prime numbers in an array
    const primeNumber = numberArray.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;
    });
    console.log(`Prime Numbers in an array; ${primeNumber}`);

//5.Return all the palindromes in an array 

let arrayPallindrome = [111, 102, 505, 323, 612, 776, 707, 121]
   const arrayPalli =  arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false;
    })
    console.log(`Palindroems in an array: ${arrayPalli}`);