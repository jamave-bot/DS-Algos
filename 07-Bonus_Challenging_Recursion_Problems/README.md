# Bonus Challenging Recursion Problems

## Reverse

Write a recursive function called **reverse** which accepts a string and returns a new string in reverse.

```js
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
```

## Colt's Solution: 

```js
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
```

<hr>

## isPalindrome

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

```js
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
```

## Colt's Solution: 
```js
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
```

<hr>