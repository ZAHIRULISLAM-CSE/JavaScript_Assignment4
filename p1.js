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

 const x=mindGame(23);
 console.log(x);
//  y=33*1.5;
//  console.log(y);