function orden(arr){
    for (let i = 1; i < arr.length; i++){
        for(let x = 0; x < i; x++){
                if(arr[i]<arr[x]){
                   let temp = arr.splice(i,1); 
    
                   arr.splice(x,0,temp[0]);
            }
        }
    }
    return arr;
    }
     console.log(orden([5,4,3,2,1]))