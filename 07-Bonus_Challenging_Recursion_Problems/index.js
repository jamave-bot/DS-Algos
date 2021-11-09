//==========================================================
// reverse
//==========================================================
//Write a recursive function called **reverse** which accepts a string and returns a new string in reverse.

// const reverse = (str)=>{
//     let strArr = str.split()
//     if(strArr.length === 1){
//         return strArr[0]
//     }
//     let newArr = []
//     newArr.push(reverse())
//     return newArr.join()
// }

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}



//==========================================================
// isPalindrome
//==========================================================
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.


// takes in a string
// returns a boolean
const isPalindrome = (str) =>{
    if (str.length === 1){
        return true;
    }

    if (str.length === 2){
        return str[0] === str[1]
    }

    if (str[0]=== str.slice(-1)){
        return isPalindrome(str.slice(1,-1))
    }
    return false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false