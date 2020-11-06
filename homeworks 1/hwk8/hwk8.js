//8. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
//year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
//years and more ). Also check that age in months is between 1 and 12.

//let m = 12; // months
let y = 1; // year
let b = +prompt("how old are you?" , "0.8")
if(b <= y)//ex. (0.8)
{
  alert("you are a baby")
}else if(b >= 1 && b <= 2){
  alert("you are a toddler")
}else if(b >= 3 && b <= 12 ){
  alert("you are a child")
}else if(b >= 13 && b <= 17 ){
  alert("you are a teenager")
}else if(b >= 18 ){
  alert("you are an adult")
}