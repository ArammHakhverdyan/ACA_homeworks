/*10. Percentage marks obtained by a student in three exams are to be entered to a
computer. An indication of Pass or Fail is given out after the three marks are entered.
The criteria for passing are as follows:
a. A student passes if all three examinations are passed.
b. Additionally a student may pass if only one subject is failed but the overall
average is greater than or equal to 50.
The pass mark for an individual subject is 40.*/

const g = 50;
let a = 65, b = 70, c = 60;
let av = 0; // average
av = (a + b + c) / 3;
 (av >= g) ? alert("Passed") : alert("Not passed");

 let a1 = 10, b1 = 85, c1 = 75;
let av1 = 0;
av1 = (a1 + b1 + c1) / 3;
 (av1 >= g) ? alert("Passed") : alert("Not passed");

 let a2 = 35, b2 = 25, c2 = 40;
let av2 = 0;
av2 = (a2 + b2 + c2) / 3;
 (av2 >= g) ? alert("Passed") : alert("Not passed");

 let a3 = 20, b3 = 40, c3 = 40;
let av3 = 0;
av3 = (a3 + b3 + c3) / 3;
 (av3 >= g) ? alert("Passed") : alert("Not passed");