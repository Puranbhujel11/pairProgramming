function gcdNum(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let num = y;
      y = x % y;
      x = num;
    }
    return x;
  }
  
  console.log(gcdNum(40, 20));