function Ordenar (array) {
    for (let i = 0; i < array.length; i++) {
       
        for (let j = 0; j < i; j++) {
            
            if (array[i]===array[j]){
                
               return console.log("Es repetido")
            } 
		
        } 
		
    }  
     return false
}

console.log(Ordenar([1,1,45,2,2]))