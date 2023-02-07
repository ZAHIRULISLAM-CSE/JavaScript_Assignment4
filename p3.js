//this function will first calculate the difference if the difference is less than 7,it will return difference else it will return twice of inputNumber.

function isLGSeven(inputNumber){
    const type= typeof(inputNumber);//justify type of input parameter
    if(type != "number"){
        return "please provide a valid input which is a number";
    }
    else{
        const difference=inputNumber-7;//calculating the difference
        if(difference<7){
            return difference;
        }
        else{
            inputNumber=inputNumber*2;
            return inputNumber;
        }
    }
    
}

 const inputNumber=14;
 var x=isLGSeven(inputNumber);
 console.log(x);