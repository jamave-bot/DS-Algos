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