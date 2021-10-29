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

console.log(validAnagram("","")) // true
console.log(validAnagram("aaz","zza")) // false
console.log(validAnagram("anagram","nagaram")) // true
console.log(validAnagram("rat","car")) // false
