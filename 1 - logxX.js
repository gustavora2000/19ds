
let a = prompt('Dame una valor ');
function log(x) 
{
    return Math.log(x)/Math.log(a)
}
for(var i=1; i<=10; i++){
    console.log(log(i))

}