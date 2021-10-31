function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    let counter1 = {};
    let counter2 = {};

    if (str1.length !== str2.length){
        return false;
    }

    for (let char of str1){
        counter1[char] = (counter1[char] || 0) + 1
    }

    for (let char of str2){
        counter2[char] = (counter2[char] || 0) + 1
    }

    for (let char of str1){
        if (counter1[char] !== counter2[char]){
            return false;
        }
    }

    return true
}

// console.log(validAnagram("","")) // true
// console.log(validAnagram("aaz","zza")) // false
// console.log(validAnagram("anagram","nagaram")) // true
// console.log(validAnagram("rat","car")) // false

// MY Solution
const countUniqueValues = (arr) =>{
    if (arr.length === 0){
        return 0
    }

    let i = 0; 
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7 
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4


// Leon's Solution (not mutating the array)
// function countUniqueValues(arr){
//     let count = 1;
//     let diff = 0;
//     if (arr.length === 0){
//         return 0
//     }
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] - arr[0] > diff){
//             count++
//             diff = (arr[i] - arr[0])
//         }
//     }
//     return count
// }