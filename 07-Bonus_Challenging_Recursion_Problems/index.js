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