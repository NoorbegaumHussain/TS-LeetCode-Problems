type ToBeOrNotToBe = {
    toBe: (val: any) => boolean ;
    notToBe: (val: any) => boolean;
};

function expectedValue(val: any): ToBeOrNotToBe {
    return {
        toBe: function(toBeVal: any){
                if(val === toBeVal){
                    return true
                }else{
                    throw new Error("Not Equal")
                }
            
        },
        notToBe: function(notToBeValue){
                if(val !== notToBeValue){
                    return true
                }else{
                    throw new Error("Equal")
                }
           
        }
    }
};

expected(5).toBe(5); // true
expected(5).notToBe(5); // throws "Equal"
expected(5).notToBe(null);
expected(5).notToBe(0);
expected(5).toBe(null);
expected(5).toBe(0);