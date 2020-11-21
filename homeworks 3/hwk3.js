/*1. Given a sentence with missing words and an array of words. Replace all ‘_’ in
a sentence with the words from the array.*/

function replace(sentence, arr){
  let index = 0
  let newSentence = ""
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] === "_"){
      newSentence += arr[index]
      index++
    }else {
      newSentence += sentence[i]
    }
  }
  

  return newSentence
}
console.log(replace("If at _ you don’t _, try, try _.", ["first", "succeed", "again"]))

/////////////////////////////////////////////

/*2. Given a mixed array of numbers, strings, booleans, nulls and undefineds. Filter
array and get all the numbers in a separate array. Arrange them such as from
the beginning are the odds and from the ending the evens.
*/

/*let array = [8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]
function filter (arr){
  let result = []
  for (let i = 0; i < arr.length; i++){
  if (typeof arr[i] === 'number'){
    result.push(arr[i])
    result.sort()
    }
      if (result[i] % 2 !== 0){
        result.sort(function(a, b) {return b % 2 - a % 2 || a - b})//.sort metody google ic em gtel , urish dzev chei karoxanum lucel
      }
    }
  return result
  }
console.log(filter(array))*/

/////////////////////////////////////////

/*3. Given an array of strings and numbers. Print the number of integers and the
number of strings in the array.*/

/*function stringNumber (arr){
  let countOfNums = []
  let countOfStrs = []
  for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) === "number"){
      countOfNums.push(arr[i])
     }

    if (typeof(arr[i]) === "string"){
      countOfStrs.push(arr[i])
    }
  } 
  
  console.log(`Numbers: ${countOfNums.length}`)
  console.log(`Strings: ${countOfStrs.length}`)
  return arr
}
console.log(stringNumber([1, 4,7,'hello',10 ,'i am a string', '456']))*/

/*4. Given an array of strings. Find the strings with maximum and minimum lengths
in array. Print the sum of their lengths.*/

/*let array = ['anymore', 'raven', 'me', 'communicate']
let array1 = ['wish', 'slightly', 'understand', 'longer',
'unexpected', 'heart']

function maxMin (arr) {
  let max = arr[0].length;
  let min = arr[0].length;
  let sum = 0;
  for (let i = 1; i < arr.length; i++){
   if (min > arr[i].length){
     min = arr[i].length
    }
  }
  for (let i = 1; i < arr.length; i++){
  if  (max < arr[i].length){
     max = arr[i].length
   }
  }
  sum = max + min
  return sum
}
console.log(maxMin(array1))
*/

/*5. Given an array of numbers and a number. Find the index of a first element
which is equal to that number. If there is not such a number, that find the index
of the first element which is the closest to it.*/

/*let array = [5, 46, 17, -2, 89, 0, 26 ];
let number =  37
function findIndex (arr, num){
  let closest = Infinity ;
  let i1 ;
  for (let i = 0; i < arr.length; i++){
    if(num === arr[i])
    return i
  else if (num !== arr[i]){
    let forr = Math.abs(arr[i] - num);
    if (forr < closest){
      closest = forr;
      i1 = i
    }
    }
    
  }
  return i1;
  }
    
console.log(findIndex(array, number))*/

////////////////

/*6. Given a sentence as a string. Split it according to space and comma and
create an array consisting of the words of the array. The last word should not
contain the last . or ! .*/

/*let string = 'May the Force be with you.';

function sentence (str){
 let array = [];
  for (let i = 0; i < str.length; i++){
     if (str[i] === ' '){
      array = str.split(" ")
    }
   // if (str[i] === "." || str[i] === "!"){
    //  newStr = str.substring(0,str.length-1)  }
  }
    return array
  }
  
  
console.log(sentence(string))*/


/*7. Given an array of a size smaller than 100. It consists of numbers from 0 to 99
in any order. Create a new array where each element from that array is placed
under the index of its value. Start from the smallest value and end with the
biggest one. If there are missing values, put in its places undefined.*/

/*let arr1 = [4, 3, 0, 9,]

function array (arr){
  let min = arr[0]
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (min > arr[i]){
     min = arr[i]
    }
    
   if(arr[i-1] + 1 === arr[i]){
      newArr.push(arr[i])
      
    }else{
      newArr.push(min,undefined)
    }
  }
  return newArr
}
console.log(array(arr1))*/
///chem karoxacel

/*8. Given an array consisting from the arrays of numbers (like a two-dimensional
array). Find sum of each row and print them as an array.
*/

/*let arr1 = [1, 2, 3]//, [4, 5, 4], [8, 8, -1]]

function sum (arr){
  let sum1 = 0;
  for(let i = 0; i < arr.length; i++){
   sum1 += arr[i]
  }
  
  return  sum1
}
console.log(sum(arr1))//chem karoxacel lucel 
*/
//9. Write a function to print X star pattern series using loop.

/*const brush = "* ";
 let size = 9;
let result = "";
 for(let i = 0; i < size; i++ ){
   let row = "";
   for(let j = 0; j < size; j++){
     if(i === 4 || j === 4){
        row += brush;
     }else {
     row += "  ";
   }
  }
 row += "\n";
 result += row ;
} 
   console.log(result)
    // teri e
  
*/
   