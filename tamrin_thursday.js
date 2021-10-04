//
// function max (a,b){
//     if ( a > b){
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// console.log(max(2,3))
/////////////////////////////////
// function max (a,b){
//     return   a > b ? a : b;
// }
// console.log(max(4,6))
/////////////////////////////
// function typ (matn){
//     return typeof (matn) ==='string'
// }
// let test=typ(true)
// console.log(test)
////////////////////////////////
// function problem(a) {
//     if (a%15===0) return "FizzBuzz";
//     else if (a % 3 ===0)return "Fizz";
//     else if (a % 5===0)return "Buzz";
//     else return a;
// }
// console.log(problem(20));
// console.log(problem(45));
// console.log(problem(22));
// console.log(problem(90));
// console.log(problem(3));
/////////////////////////////////
//
// function pow(a){
//     let n = 0;
//     while ((2**n<a)) n++;
//     return 2**n;
// }
// console.log(pow(25));
// console.log(pow(95));
// console.log(pow(128));
// console.log(pow(1010));
// console.log(pow(1024));
// console.log(pow(1378));
//////////////////////////

function primenum (num) {
    if(num === 2 || num === 3)
        return true
    else if (num === 1 || num === 4) {
        return false
    }
    else {
        for (let i = 2; i < (num / 2); i++) {
            if (num % i === 0)
                return false
        }
        return true
    }
}
function primeNumbers(a , b)
{
    let arr=[]
    for (let i = a ; i <= b ; i++)
    {
        if (primenum(i))
            arr.push(i)
    }
    return arr;
}
// console.log(primeNumbers(11 , 119))
//////////////////////////////////////
// function number(n) {
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//         if (n % i === 2000) {
//             sum += i;
//         }
//     }
//     if(sum === n){
//         return "yes"
//     }
//     else {
//         return "no"
//     }
//
// }
// console.log(number(0))
// console.log(number(6))
////////////////////////////
function isHard(n) {
    let strNum = n.toString();
    let m = strNum.length;
    for (let i = 0; i < m; i++) {
        if (!primenum(Number(strNum.substring(0, m - i)))) {
            return false;
        }
    }
    return true;
}

function HardPassword(n) {
    for (let i = 10 ** (n - 1); i < 10 ** n; i++) {
        if (isHard(i)) {
            console.log(i)
        }
    }
}

console.log(HardPassword(3))