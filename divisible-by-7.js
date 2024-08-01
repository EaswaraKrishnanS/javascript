/* let num=21

if(num%7==0){
    console.log("It's Divisible")
}else{
    console.log("It's Not Divisible")
} */


/* let num = 21;

if (num % 3 == 0) {
    console.log("It's Divisible");
} else {
    console.log("It's Not Divisible");
} */


/* let num = - 4568

if(num>=0){
    console.log(num," : It's Positive Number")
}else{
    console.log(num," : It's Not Positive Number")
} */


/* let num=99

if(num>99 && num<1000){
    console.log(num,' : Its three digits number')
}

else{
    console.log(num,' : Its not three digits number')
} */


/* num = 31

if(num%2===0){
    console.log(num,"It's Even Number")
}else{
    console.log(num,"It's Odd Number")
} */

/* let num = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        console.log(num[i] + " is an Even Number");
    } else {
        console.log(num[i] + " is an Odd Number");
    }
} */


let num = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
let evenNumbers = [];
let oddNumbers = [];
    
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        evenNumbers.push(num[i]);
    } else {
        oddNumbers.push(num[i]);
    }
}
    
console.log("Even Numbers: " + evenNumbers);
console.log("Odd Numbers: " + oddNumbers);
    