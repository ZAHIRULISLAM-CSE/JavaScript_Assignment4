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

const array=false;
var x=findingBadData(array);
console.log(x);