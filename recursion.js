// Using simple 
// function recursionNum(n:number){
//     if (n == 0 || n == 1){
//         return n
//     }
//     else{
//         let newList:number[] = [0,1]
//         for(let i=2; i<=n; i++){
//             newList.push(newList[i-1] + newList[i-2])
//         }
//         return newList
//     }
// }
// console.log(`Here is series : ${recursionNum(8)}`);
// Using Recursion
// function recursionNum(n:number):number{
//     if (n == 0 || n == 1){
//         return n
//     }
//     else{
//         return recursionNum(n-1) + recursionNum(n-2);
//     }
// }
// // recursionNum(5)
// // const result = recursionNum(10);
// console.log(`Here is series : ${recursionNum(10)}`);
function factorialNum(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log('here is : ', factorialNum(5));
// Example usage:
// const n = 5;
// const resultIterative = factorialNum(n);
// console.log(`The factorial of ${n} (iterative) is: ${resultIterative}`);
