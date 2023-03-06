//A function that ctakes an array of integers and returns the sum of all the positive integers of the array.
var positiveSum = (arr1) =>{
    var arrayLength = arr1.length
    var sumIntegers = 0
    for(var i =0;i<arrayLength;i++){
        var temp = arr1[i]
        if (temp>0){ 
            sumIntegers += arr1[i]
        }  
    }
    return sumIntegers
}
var result = positiveSum([-8,8,9,12,-85])
console.log(result)

//Made by Syed Ahmed Haider Razvi 
