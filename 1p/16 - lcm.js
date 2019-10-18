//O(n)
function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;

    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
function lcm(x, y) {
    
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
 }
 
 console.log(lcm(10,4));
