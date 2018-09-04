function steps(x){
    let myFunctionCalls = 0;
        if(x <= 0){
            throw new Error("Only positive numbers are allowed")
        }else{
            while( x > 1){
                if( x%2 == 0 ){
                    x = x/2;
                 }else{
                     x = (x * 3) +1;
                 }
                myFunctionCalls++  
            }
            return myFunctionCalls;
        }
    } 

export { steps };