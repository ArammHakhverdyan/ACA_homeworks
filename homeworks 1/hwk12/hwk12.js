/*12. Input three numbers a, b, c respectively, where a is a non zero number and write a
program to solve quadratic equations: ax bx . (Hint: use Math.pow or
Math.sqrt).*/


let a = +prompt("num:","1")
let b = +prompt("num:","2")
let c = +prompt("num:","1")
let d; // discriminant (D)
let x1; // x1
let x2; // x2
let i;
d = (-b * Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2;
alert(`D = ${d}`);

if(d > 0){
  alert(x1 = (-b + Math.sqrt((Math.pow(b, 2) - 4 * a * c))) / 2 * a)
  alert(x2 = (-b - Math.sqrt((Math.pow(b, 2) - 4 * a * c))) / 2 * a)
}else if(d === 0){
  alert(x1 = x2 = (-b) / (2 * a));
} else if(d < 0){
  alert(x1 = (-b) / (2 * a) + i * Math.sqrt((-(Math.pow(b, 2) - 4 * a * c))) / 2 * a)
 alert( x2 = (-b) / (2 * a) - i * Math.sqrt(-(Math.pow(b, 2) - 4 * a * c)) / 2 * a)
}else{
  alert("Enter valid constans")
}