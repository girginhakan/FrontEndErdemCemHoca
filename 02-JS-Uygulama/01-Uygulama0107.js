let sayi =-5;
let mutlakSayi = Math.abs(sayi);
console.log(mutlakSayi);//1.

let sayi2 = 10.66;
console.log(Math.ceil(sayi2));//2.

let sayi3 = 10.66;
console.log(Math.floor(sayi2));//3.


console.log(Math.max(6,15,-7, 0,80,-35));//4.
console.log(Math.min(6,15,-7, 0,80,-35));//5.


let sayi4=10.6789342;

console.log(sayi4.toFixed(3));

console.log(sayi4.toPrecision(5));//6.

console.log(Math.sqrt(sayi4));//7.

console.log(Math.pow(2,3));//8.

let sayi5=123.456789;
console.log(sayi5.toPrecision(6));//9.


console.log(parseInt(sayi5));//10.
console.log(Math.trunc(sayi5));//10.

console.log(parseInt(Math.random()*101));