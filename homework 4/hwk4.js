/*1. Write a function, which receives two numbers as arguments and finds all numbers
between them such that each digit of the number is even. The numbers obtained should
be printed in a comma-separated sequence on a single line.*/

function numbers (a,b){
    let result = []
    for(let i = a; i <= b; i++){
      if(i % 2 === 0){
        result += i + ", "
      }else if(i > 100){
        return 'Such numbers does not exist.'
      }
      }
      return result 
    }
  
  console.log(numbers(19,61))
  
  /*2. Write a function which removes all the words from array starting by a given letter*/
  
  /*const array = ['Godfather', 'Game of thrones', 'Social Network'];
  function removeByLetter(arr, letter){
    for(let i = 0; i < arr.length; i++){
      if(letter === arr[i][0]){
       arr.splice(i,1)
       i--
      }
    }
    return arr
  }
  console.log(removeByLetter(array, "G"))*/
  
  /*3. Write a function filterRange(arr, a, b) that gets an array, looks for elements between a
  and b in it and returns an array of them.*/
  
  /*let array = [-75, -10, -8, 0, 10, 14, 20]
  function filterRange(arr,a,b){
    let newArr = []
    for(i = a; i <= b; i++){
      if(arr[i] > a && arr[i] < b){
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  console.log(filterRange(array, -100, 15))*/
  
  /*4. Given a phone number. Write a function to clean it up, so it is valid.
  The rules are as follows:
  If the phone number is less than 10 digits assume that it is a bad number
  If the phone number is longer than 10, then it is a bad number
  If the phone number is 10 digits assume that it is good
  If the phone number consists of 11 symbols and the first one is + and others are
  numbers, then trim + and return remaining 10 digits.
  If the phone number contains + symbol more than one, consider it as a bad
  number.
  If the phone number contains + symbol not as the first character, consider it as a
  bad
  number.
  Ignore spaces between digits.*/
  
  /*function cleanUp (number){
    for(let i = 0; i < number.length; i++){
      let num = ""
      if(number.length === 11 && number[0] === "+"){
        return number.slice(1,number.length-1)
      }else if(number[i] === " "){
       num = number.split(" ").join("")// chei karoxanum aranc method
        return num
      }
      if(number.length > 11 || number[i] === "+"){
        return "Bad number"
        }
    }
  return number
  }
  console.log(cleanUp("+0123456789"))*/
  
  /*5. Write a function that repeats the shorter string until it is equal to the length of the
  longer string.
  - Both strings will differ in length.
  - Both strings will contain at least one character.
  - Either of the two strings could be the shortest in length.*/
  
  /*function lengthen(a,b){
    let res = ""
    for(let i = 0; i < a.length; i++){
      if(a.length > b.length){
        res = b.repeat(a.length)
      }else{
        res = a.repeat(b.length)
      }
    }
  return res
  }
  
  console.log(lengthen("ab", "abcdefg"))*/