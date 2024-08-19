const sumAll = function(para1, para2) {
    console.log(para1)
    console.log(para2)
    let finalSum = 0;
    if(para1 < 0) return "ERROR";
    if(!Number.isInteger(para1) || !Number.isInteger(para2)) return "ERROR";
    if(para1 > para2) {

        for(i = para2; i <= para1; i++){        
            finalSum += i;
            console.log(finalSum)
        }
        return finalSum
    } else if (para1 < para2) {

        for(i = para1; i <= para2; i++){        
            finalSum += i;
            console.log(finalSum)
        }
        return finalSum
    }

};

// Do not edit below this line
module.exports = sumAll;

// const sumAll = function(para1, para2) {
//     console.log(para1)
//     console.log(para2)
//     let finalSum = 0;
//     let sum = para1 + para2;
//     let sumM = sum * 2;
//     console.log(sumM)
//     finalSum =  sumM

//     return finalSum
// };
