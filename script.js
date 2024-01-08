let arrayNumber = [4,22,35,40,42,65,78,58,21];

//1.Print odd numbers in an array
let resultArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        return item % 2 !== 0

    }))
})(arrayNumber);

console.log(`All odd numbers in an array: ${resultArray}`)


//2.Convert all the strings to title caps in a string array
let stringArray = ["akshay", 'is', 'a', 'smart', 'developer']

let resultStringArray = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase()

    }))
})(stringArray);

console.log(`All upper case string in an array: ${resultStringArray}`)

//3.Sum of all numbers in an array

let resultSumArray = (function (arrayNumber) {

    return (arrayNumber.reduce((currentTotal, item) => {

        return currentTotal + item

    }, 0))
})(arrayNumber);

console.log(`Sum of numbers in an array: ${resultSumArray}`)

//4.Return all the prime numbers in an array

let resultPrimeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(arrayNumber);

console.log(`Prime numbers in an array: ${resultPrimeArray}`)

//5.Return all the palindromes in an array

let resultPallindromeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(arrayNumber);

console.log(`"Pallindrome numbers in an array: ${resultPallindromeArray}`)

//6.Return median of two sorted arrays of same size
let findMedian = function(arr1, arr2) {
   let mergedArray = arr1.concat(arr2).sort(function(a, b) {
       return a - b;
   });

  let length = mergedArray.length;
   let median = (mergedArray[Math.floor((length - 1) / 2)] + mergedArray[Math.ceil((length - 1) / 2)]) / 2;
   
   return median;
};

let medianResult = findMedian([1, 2, 3], [4, 5, 6]);
console.log(medianResult);

//7.Remove duplicates from an array
let arrayWithDup = [2,8,4,6,2,2,5,5,4,78,65,65,25,2,5];

let resultArrayWoDup = ((arrayWithDup, index) => {

    return [...new Set(arrayWithDup)]

})(arrayWithDup)

console.log(`Array without Duplicates: ${ resultArrayWoDup}`)

//8.Rotate an array by k times and return the rotated array

let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log(`Array roatated k times: ${resultArrayShifted}`)