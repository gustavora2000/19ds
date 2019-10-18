function orden(arr){
    for (let i = 1; i < arr.length; i++){
        for(let x = 0; x < i; x++){
                if(arr[i]>=arr[x]){
                   return true;
            }
        }
    }
    return false;
    }
     console.log(orden([1,2,3,4]))