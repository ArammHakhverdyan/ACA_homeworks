//5. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same.

let str = "367";
let a = str.length;
alert(`Digits = ${a}  New number: ${str[2]+ '' + str[0]+ '' + str[1]}`)

let str1 = "1002";
let a1 = str1.length;
alert(`Digits = ${a1} New number: ${str1[3]+ '' + str1[0]+ '' + str1[1]+ '' + str1[2]}`)


let str2 = "250";
let a2 = str2.length;
alert(`Digits = ${a2}`)
if(str2[2] === "0"){
  alert(str2)
}else{
alert(str2[2]+ '' + str2[0]+ '' + str2[1])
}