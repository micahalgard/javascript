function steps(x){
    let myFunctionCalls = 0;
        if(x <= 0){
            throw new Error("Only positive numbers are allowed")
        }else{
            do{
                if( x%2 == 0 ){
                    x = x/2;
                 }else{ 
                     x = (x * 3) +1;
                 } 
                 myFunctionCalls++
            }while( x > 1 && myFunctionCalls < 20);
            return myFunctionCalls;
        }   
    }
console.log(steps(0));
    
      