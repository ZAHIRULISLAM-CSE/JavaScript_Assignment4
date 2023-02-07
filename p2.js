//this function will take take a string as parameter and return even if it is divisible by 2 or it will return odd.
function evenOdd(inputString){
    const type= typeof(inputString);//justify type of input parameter
    if(type != "string"){
        return "please provide a valid input which is string";
    }
    else{
        const stringLength=inputString.length;//calculating length of the inputString
        // console.log(stringLength);
        if((stringLength & 1) == 0){
            return "even";
        }
        else{
            return "odd";
        }
    } 
}
const string="ab";
const result=evenOdd(string);
console.log(result);