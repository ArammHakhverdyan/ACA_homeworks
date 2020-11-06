/*17. Write a program which will compute the area of a rectangular or a triangle after
prompting the user to type the name of the figure name. Also check that entered
numbers are positive.
For the triangle entered numbers are height and and base.*/

let a = +prompt("triangle's side1:", "6");
let b = +prompt("triangle's side2:", "7");
let c = +prompt("triangle's side3", "6");
let s = (a + b + c) / 2;
let area =  Math.sqrt(s * (s - a) * (s - b) * (s - c))
if(a <= 0 || b <= 0  || c <= 0 ){
  alert("Please enter only positives")
} else {
  alert(`A = ${area}`)
}

let d = +prompt("rectangular's side1:", "8")
let g = +prompt("rectangular's side2:", "5")
let ar = d * g;
alert(`A = ${ar}`)