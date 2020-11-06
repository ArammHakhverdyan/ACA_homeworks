/*18. (***) Enter a number. Find the difference between its biggest and smallest digits.*/

const str = "5";
let a = str.length;
let max = Math.max(5);
let min = Math.min(5);
alert(a);
if(a === 1){
  alert(a - a)
}else if(a > 1){
  alert(`biggest: ${max}`);
  alert(`smallest: ${min}`);
}else{
  alert("null")
}

const str1 = "152";
let a1 = str1.length;
let max1 = Math.max(1,5,2);
let min1 = Math.min(1,5,2);
alert(a1);
if(a1 === 1){
  alert(a1 - a1)
}else if(a1 > 1){
  alert(`biggest: ${max1}`);
  alert(`smallest: ${min1}`);
  alert(`the difference between ${max1} and ${min1} equals ${max1 - min1}`)
}else{
  alert("null")
}

const str2 = "4593653";
let a2 = str2.length;
let max2 = Math.max(4,5,9,3,6,5,3);
let min2 = Math.min(4,5,9,3,6,5,3);
alert(a2);
if(a2 === 1){
  alert(a2 - a2)
}else if(a2 > 1){
  alert(`biggest: ${max2}`);
  alert(`smallest: ${min2}`);
  alert(`the difference between ${max2} and ${min2} equals ${max2 - min2}`)
}else{
  alert("null")
}