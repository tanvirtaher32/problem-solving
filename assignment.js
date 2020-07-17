            //feetToMile

function feetToMile(feet){

    if(feet<0){
        return "value can not be negative";
    }
    else{
        let mile = feet/5280;

        return mile;
    }
}
let mileResult = feetToMile(10560);
console.log(mileResult);



            //woodCalculator


function woodCalculator(chair,table,bed){

    if(chair<0 || table<0 || bed<0){
        return "value can not be negative";
    }

    else{
        let chairWoodNeeded = chair*1;
    let tableWoodNeeded = table*3;
    let bedWoodNeeded = bed*5;

    let totalWoodNeeded = chairWoodNeeded + tableWoodNeeded + bedWoodNeeded;

    return totalWoodNeeded;
    }
}

let woodResult = woodCalculator(5,5,6);
console.log(woodResult);



            //brickCalculator

function brickCalculator(floor){

    let firstPhaseBrickCount =0;
    let  secondPhaseBrickCount =0;
    let  thirdPhaseBrickCount =0;

    if(floor<0){
        return "value can not be negative";
    }

    else if( floor<=10){
         firstPhaseBrickCount = floor*15*1000;
    }
    else if( floor<=20){
         secondPhaseBrickCount = (floor-10)*12*1000 + 10*15*1000;
    }
    else if(floor>20){
          thirdPhaseBrickCount = (floor-20)*10*1000 + 10*15*1000 + 10*12*1000;
    }
    
    let totalBrickCount = firstPhaseBrickCount + secondPhaseBrickCount + thirdPhaseBrickCount;
    return totalBrickCount;

}

let totalBrickResult = brickCalculator(105);
console.log(totalBrickResult);



               //tinyFriend



function tinyFriend(array){
    arrayLength=array.length;
    for(var i=0;i<arrayLength;i++){
        console.log(array[i]);
        let nameSize =[];
        nameSize[i]= array[i].length;
        console.log(nameSize[i]);
        let maxValue = nameSize[0];
        if(nameSize[i+1]>maxValue){
            maxValue= nameSize[i+1];
        }
        
       
        
    }
    return maxValue;

}
let array = ['rahim','karim','tod','pitter','parker'];
