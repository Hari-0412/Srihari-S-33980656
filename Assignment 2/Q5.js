let num = [10, 20, 30, 40, 50];
let sum = 0;
let largest = num[0];
for(let i = 0; i < num.length; i++){
    sum += num[i]; 

    if(num[i] > largest){
        largest = num[i];
    }
}
console.log("Sum =", sum);
console.log("Largest Number=", largest);
