//this function will take a positive value and then multiply with 3,then added 10 with the result,then dividing the result by 2 then minus 5 after dividing;
function mindGame(positiveValue){

    //checking the type of the parameter
    if(typeof positiveValue != "number"){
        return "provide a valid input which is number";
    }
    else if(positiveValue <0){
        return "please give a positive number"
    }
    else{
        let totalResult=(positiveValue*3+10)/2-5;//calculating totalResult
        return totalResult;
    }
    
}



//this function will take take a string as parameter and return even if it is divisible by 2 or it will return odd.
function evenOdd(inputString){
    const type= typeof(inputString);//justify type of input parameter
    if(type != "string"){
        return "please provide a valid input which is string";
    }
    else{
        const stringLength=inputString.length;//calculating length of the inputString
        if((stringLength & 1) == 0){
            return "even";
        }
        else{
            return "odd";
        }
    } 
}


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


//this function will find the total number of element which is lesss than zero

function findingBadData(inputNumberArray){
   
    const type= Array.isArray(inputNumberArray);//justify type of input parameter
    if(type != true){
        return "provide a array please"
    }
    else{
        const length=inputNumberArray.length;//length of the array
        for(let i=0;i<length;i++){
            //checking if a user doesnt give number in the whole array
            if( typeof inputNumberArray[i] != "number"){
                return "please give all the array element as number"
            }
        }
        let countNegative=0;
        for(let i=0;i<length;i++){
        if(inputNumberArray[i]< 0){
            countNegative++;
        }
        }
        return countNegative;        
    }
}



//this function will convert gems to diamond based on some condition.at first multiply with 21,32,43 according to input then check it grater or less than 2000.if grater minus 2000 from the result and return else return the total if less than 2000.
function gemsToDiamond(friendOneGems,friendTwoGems,friendThreeGems){
    if(typeof friendOneGems != "number" || typeof friendTwoGems != "number" || typeof friendThreeGems != "number"){
        return "provide all the input as number"
    }
    else if(friendOneGems<0 || friendTwoGems <0 || friendThreeGems <0){
        return "provide positive value, as gems can not be a negative number"
    }
    else{
        let totalDimond=friendOneGems*21+friendTwoGems*32+friendThreeGems*43;//total gems of three friend
        //checking the condition 
        if(totalDimond >2000){
            totalDimond=totalDimond-2000;
            return totalDimond;
        }
        else{
            return totalDimond;
        }
    }
}