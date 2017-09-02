// 100% solution
function solution(a) {
// write your code in JavaScript (Node.js 6.4.0)
    var n = a.length + 1;
    //console.log("n:",n);
    var s = a.sort(function(x,y){return x-y});
    //console.log("s:", s);
    var b = 0;
    for(var x=1; x<=n; x++){
    //console.log("x:",x);
    //console.log("s:",s[x-1]);
        if(x!==s[x-1]){
            b = x;
            break;
        }
    }
    if(a.length === 0) {b =1;}
    return b;
}

// A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);
// that, given a zero-indexed array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Assume that:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].
// Complexity:

// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
// Elements of input arrays can be modified.

//-------------------------------------------------------------------------
//MY CODE <-- 40%
// function solution(A) {
//     if(A.length === 0) {
//         return 1;
//     }
    
//     if(A.length === 1) {
//         return A[0] + 1;   
//     }
    
//     var biggestNum = findLargestNum(A);
//     var smallestNum = findSmallestNum(A);
    
//     while(smallestNum < A.length + smallestNum) {
//         if(A.indexOf(smallestNum) === -1) {
//             return smallestNum;
//         } else if(smallestNum == A.length + smallestNum) {
//             return smallestNum--;
//         } else smallestNum++;
//     }
// }

// function findLargestNum(mainArray) {
//     return Math.max.apply(null, mainArray);
// }

// function findSmallestNum(mainArray) {
//     return Math.min.apply(null, mainArray);   
// }