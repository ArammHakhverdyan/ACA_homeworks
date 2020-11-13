//1. Insert a digit and a number. Check whether the digits contains in the number or not.

function contain (number){
  let digit = prompt("digit");
  for(let i = 0; i < number.length; i++){
    return (number[i] === digit);
  }
  }
  alert(contain(prompt("number")));
  //miayn arajin digitna stugum , for loopy chi ashxatum*/

////V2

 /* let num = prompt("number:");
let dig = prompt("digit:");
for(let i = 0; i < num.length; i++){
  if(num[i] === dig){
    console.log("yes")
  }else if(num[i] !== dig){
    console.log("no")
    }
}*/

///////////////////////////////////////////////////

//2. Enter a number. Reverse its first and last digits. Print the new number.

/*function reverse (num){
  let lastDig = num[num.length - 1];
  let newNum = "";
  let i = 0;
  while(i < num.length){
    i++;
}
  if (lastDig === "0"){
    alert(num)
    }
    
num = lastDig + num;
newNum = (num - lastDig) / 10;
alert(newNum)

}
alert(reverse(prompt("number:", "5789")))
*/
////V2

/*let num = prompt("number:")
let lastDig = num[num.length - 1];
let newNum = "";
let i = 0;
while(i < num.length){
  i++;
}
num = lastDig + num;
newNum = (num - lastDig) / 10;
console.log(newNum);*/

/////////////////////////////////////////////////

//3. Enter a number. Find the difference between its biggest and smallest digits.

/*function diff (num){
  let str = '' + num;
  let min = 9;
  let max = 0;
  for(let i = 0; i < str.length; i++){
    let dig = +str[i];
    if (dig > max) max = dig;
    if (dig < min) min = dig;
  }
  console.log('min', min)
  console.log('max', max)

  return max - min
}
alert(diff(prompt("number:")))*/

//4. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

/*function prime(num){
   if (num === "1"){
    return alert(`${num} is not prime`)
  }
  else if(num === "2")
  {
    return alert(`${num} is prime`)
 
  }
  for(i = 2; i < num; i++){
    if(num % i === 0){
      return alert(`${num} is not prime`)
    }
    }
      return alert(`${num} is prime`)
     
}

alert(prime(prompt("number:")))*/

//////////////////////////////////////////////////////////

/*5. Write a program that reads two strings for playing the game of Rock-Paper-Scissors. If
the strings entered by the user are not 'Paper', 'Rock' or 'Scissors', the program keeps
on prompting the user to enter new values. If valid strings are inserted, repeat the loop,
until one of the sides wins. (You can use alert instead of console.log).*/


/*function game (user1, user2){
  let rock = "rock"
  let scissors = "scissors"
  let paper = "paper"
  if(user1 === user2){
    alert("Draw! Enter new values.")
  }else if(user1 === rock && user2 === scissors){
    alert("user1 wins")
  }else if(user1 === paper && user2 === rock){
    alert("user1 wins")
  }else if(user1 === scissors && user2 === paper){
    alert("user1 wins")
  }else if(user2 === rock && user1 === scissors){
    alert("user2 wins")
  }else if(user2 === paper && user1 === rock){
    alert("user2 wins")
  }else if(user2 === scissors && user1 === paper){
    alert("user2 wins")
  }else if(user1 !== rock || user1 !== paper || user1 !== scissors){
    alert("Invalid input, enter correct value.")
  }else if(user2 !== rock || user1 !== paper || user1 !== scissors){
    alert("Invalid input, enter correct value.")
  }
}
game(prompt("user1"),prompt("user2"))*/


/*6. Given a number n ( n >= 0 ). Print n th Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 ...)*/

//Fn = Fn-1 + Fn-2

/*function fibonacci(n){
  
  if(n <= 1){
    return n
  }else{
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
console.log(fibonacci("20"))*/

//7. Given a number n ( n > 0 ). Print Fibonacci series up to n.

/*function fibSer(n){
  let n1 = 0;
  let n2 = 1;
  let n3;
  for (let i = 1; i <= n; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}
}
console.log(fibSer("7"))*/
//google ic em nayel dzevy, chei karoxanum, lucel


/*8. Write a program, to calculate the value of the following sequence:
1 - 1/3 + 1/5 - 1/7 + 1/9 + ..... + (− 1 )* 1/n */

/*function calc (n){
let value = 0;

for(let i = 1; i <= n; i = i + 2 ){
  value = 1 - (1 / i) +(Math.pow(-1, n)) * 1 / n
  }
 
  console.log(value)
}
console.log(calc("6"))*/

/*9. Write a program which will give you all of the potential combinations of a two-digit
decimal combination, printed in a comma delimited format
‘00’, ‘01’, ‘02’, ..., ‘98’, ‘99’.*/

/*let result = "";
 for(let i = 0; i < 100; i++ ){
   let row = "";
   row += i;
if(i < 10){
  result += `"0${row}", `
}else
 result += `"${row}", `
} 
console.log(result)*/

/*10. Insert a number. Calculate product and sum of the digits of the number. If product is
divisible by the sum, print the quotient, otherwise print the remainder.*/

/*function calc (num){
  let sum = 0;
  let product = 1;
  for(let i = 0; i < num.length; i++){
    sum += +num[i]
    product *= +num[i]
    
  }
  console.log(`sum == ${sum}`)
  console.log(`product == ${product}`)
  if(product % sum === 0){
      console.log(`quotient == ${product / sum}`)
    }else{
      console.log(`remainder == ${product % sum}`)
    }
}

console.log(calc("455"))*/
