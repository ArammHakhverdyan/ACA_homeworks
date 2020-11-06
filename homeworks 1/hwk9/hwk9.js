//9. Given three numbers. Sort them by the ascending order.

let a = 45, b = 26, c = 78;
if(a < b && c){
  alert(`${a} true`)
}else{
  alert(`${a} false`)
}
if(b < a && c){
  alert(`${b} true`)
}else{
  alert(`${b} false`)
}
if(c < a && b){
  alert(`${c} true`)
}else{
  alert(`${c} false`)
}
alert(`${b} smallest`);

(a > c) ? alert(`${a} biggest`) : alert(`${c} biggest`);

alert(`${b},${a},${c}`);

/*let a = -23, b = -456, c = 0;
if(a > b && c){
  alert(`${a} true`)
}else{
  alert(`${a} false`)
}
if(b > a && c){
  alert(`${b} true`)
}else{
  alert(`${b} false`)
}
if(c > a && b){
  alert(`${c} true`)
}else{
  alert(`${c} false`b)
}
alert(`${c} biggest`);

(b < c) ? alert(`${b} smallest`) : alert(`${c} smallest`);

alert(`${b},${a},${c}`);*/