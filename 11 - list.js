 function Ordenar (array) {

    let x = 0

    for (let i = 0; i < array.length; i++) {
       
        for (let j = 0; j < i; j++) {
            
            if (array[i]===array[j]){
                
                console.log("Se repiten los: " + array[i])
                
            } 
			
        } 
		
    }  


}

console.log(Ordenar([9,9,19,19,20,5]))