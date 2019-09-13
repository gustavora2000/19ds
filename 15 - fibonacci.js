//O(n)
let n = parseInt(prompt("Escribe un numero: ")), x = 1, y = 1, z = 0; 
console.log(x)
console.log(y)
z = y + x;
console.log(z)
for(var c = 3; c <= n-1; c++)
 {
 x = y;
 y = z;
 z = y + x;
 console.log(z)

}   
