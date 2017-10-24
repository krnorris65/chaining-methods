const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const newChain =[]; // empty array that numbers will be added to after going through the forEach function

const chainingNums = integers.sort(function(first, second) {
    return second - first //sorts numbers in intergers array in decending order
}).filter(function(num) {
    if (num < 19) {
        return num //returns only the numbers that are less than 19
    }
}).forEach( function(num) {
    newChain.push(num * 1.5 - 1) //multiplies each remaining number by 1.5 & then subtracts 1, and puts in newChain array
    })

console.log(newChain.reduce( function (currentTotal, nextNum) {
    return currentTotal + nextNum //puts the sum of all resulting numbers in the console
}))
