function averageNumber(arr){
    if(!Array.isArray(arr)){
        return "Invalid Input!"
    }
    if(arr.length===0){
        return "Empty Array!"
    }
    if(!arr.every(t=>t=Number(t))){
        return "All values of the array should be numbers!"
    }
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    return average;
}

module.exports=averageNumber