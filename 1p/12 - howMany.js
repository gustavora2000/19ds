let count = 0;
function orden(arr){
    for (let i = 1; i < arr.length; i++){
        for(let x = 0; x < i; x++){
                if(arr[i] === arr[x] ){
                    count = count + 1
            }
        }
    }
    return arr;
    }
     console.log(orden([3,2,2]))
     console.log("Existen " + count + " repetidos")