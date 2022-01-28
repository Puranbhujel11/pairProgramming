
//Easy 1//
// let  input =[ 1,4,6,7,24,27,11,97];
// let oddNum = input.filter(number => {
//     return number % 2 !== 0;
// });

// let evenNum = input.filter(number => {
//     return number % 2 !== 1;
// });

// console.log(oddNum);
// console.log(evenNum);


// using for loop for easy 1 //
const arraySplitter = (inputArray) => {
    const evenArray = []; 
    const oddArray = []; 
    for ( i = 0; i < inputArray.length; i++){
        if(inputArray[i] % 2 === 0){
            evenArray.push(inputArray[i]);
        }

        if(inputArray[i] % 2 !== 0){
            oddArray.push(inputArray[i]);

        }
    }
    console.log(`Even array: ${evenArray}`);
    console.log(`Odd array:  ${oddArray}`);
}

//easy2//
// let num = 10;
// for (let i = 2; i < number; i++){
    
// }






