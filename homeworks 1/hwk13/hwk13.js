/*. Given the following code rewrite it using only two if operators. (Hint: use logical
    operators).

    let n = +prompt("n=");
    
    let i = 0;
    let j = 0;
    
    if(n % 2 === 0) {
      if (!Math.floor(n / 10)) {
        alert(i += 1);
      }
    }
    if(n % 3 === 0) {
      if (n % 10 === 1){
       alert(j += 1); 
      }
    }*/
    
    let n = +prompt("n=");
    let i = 0;
    let j = 0;
    
    if(n % 2 === 0 && !Math.floor(n / 10)){
      alert(i += 1);
    }
    
    if(n % 3 === 0 && n % 10 === 1) {
       alert(j += 1); 
    }