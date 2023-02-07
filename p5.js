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

const x=gemsToDiamond(20,10,5);
console.log(x);