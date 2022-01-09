// Add your functions her
// Your code here
function mapToNegativize(sourceArray) {
    let newArray = sourceArray.map(function(num) {
        return num * -1
    }
    )
    return newArray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let newArray = sourceArray.map(function(num) {
        return num * 2
    })
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = sourceArray.map(function(num){
        return num**2
    })
    return newArray
}

// const mapToSquare = (sourceArray) => {
//     const squareArray = []; 
//     for(let x of sourceArray){
//         squareArray.push(x = x**2) 
//     }
//     return squareArray 
// }

function reduceToTotal(sourceArray, startingPoint = 0) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return sourceArray.reduce(reducer, startingPoint)
}

// const reduceToTotal = (sourceArray, startingPoint=0) => {
//     let total = startingPoint
//     for(let num of sourceArray){
//         total = total + num 
//     }
//     return total
// }

function reduceToAllTrue(sourceArray) {
    let value = true
    for (let item of sourceArray){
        if (item === false) {
            value = false
        }
    }
   return value
}

// const reduceToAllTrue = (sourceArray) => {
//     let value = true 
//     for(let item of sourceArray){
//         if (item === false){
//             value = false 
//         }
//     }
//     return value 
// }

function reduceToAnyTrue(sourceArray) {
    let value = false;
    for(let item of sourceArray){
        if (item === true) {
            value = true
        }
    }
    return value
}

// const reduceToAnyTrue = (sourceArray) => {
//     let value = false 
//     for(let item of sourceArray){
//         if (item === true){
//             value = true 
//         }
//     }
//     return value 
// }


function map(array, func1) {
//    let newArray = func1(array)
//    return newArray
    
    let newArray = array.map(function(elem) {
        return func1(elem)
    })
    return newArray
}

function reduce(array, func1) {
    // let value = true
    // for(let elem of array) {
    //     func1(elem, 0); 
    //     if (elem === false)
    //     value = false;
    //     else if(elem === true)
    //     value = true;
    //     else(elem)
    //     value = elem
    // }
    // return value

    return array.reduce(func1)
}

// function reduceToTotal(sourceArray, startingPoint = 0) {
//     const reducer = (previousValue, currentValue) => previousValue + currentValue;
//     return sourceArray.reduce(reducer, startingPoint)

// function map(src) {
//     let r = []
//     for(let i = 0; i < src.length; i++) {
//         if(src[i] === NaN);
        
//         else(r.push(src[i] * -1))
//     }
//     return r
// }