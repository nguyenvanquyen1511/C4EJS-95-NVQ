/* Bài tập tuần trước
- draw circle
*/
// const numberOfEdeges = prompt("Enter the number of edges:");

// for (let i = 1; i <= Number(numberOfEdeges); i++) {
//   fd(50);
//   rt(180 - (180 * (numberOfEdeges - 2)) / numberOfEdeges);
// }
/*
- draw n polygons
*/
// const numberOfPolygons = prompt("How many polygons?");

// for (let i = 3; i <= Number(numberOfPolygons) + 2; i++) {
//   for (let j = 1; j <= i; j++) {
//     fd(50);
//     rt(180 - (180 * (i - 2)) / i);
//   }
// }
/*
1.	Variable swap
Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other

For example:

let a = 5;
let b = 6;
console.log(a, b); // Result: 5 6

<Perform swapping>

console.log(a, b); // Result: 6 5

Google ‘JS swap variables’ to learn about at least 2 ways to perform this task, write at least 2 examples to demonstrate you have acquired them, if you need hints, they are at the last page of this homework

*/
// Cách 1 : cộng trừ trực tiếp với hai số
let num1 = 5;
let num2 = 6;
console.log(num1, num2);
num1 = num1 + num2;// num1 = 11
num2 = num1 - num2;// num2 = num1 - num2 = 11 - 6 = 5
num1 = num1 - num2;// num1 = num1 - num2 = 11 - 5 = 6
console.log(num1, num2);

// Cách 2 : Dùng biến trung gian để swap 2 giá trị với nhau
let num3 = 10;
let num4 = 11;
let swap;
console.log(num3, num4);
swap = num3;// swap = 10; num3 = undefined
num3 = num4;// num3 = 11; num4 = undefined
num4 = swap;// num4 = 10; swap = undefined
console.log(num3, num4);


/*
2.	Split String into Array
Using type conversion from String to Array

const s = ‘Hello beauty there’;
const a = Array(s);
console.log(a); // Result: [“Hello beauty there”]

Might NOT be what a developer expects; sometimes what they really want is

const s = ‘Hello beauty there’;

<Perform splitting>

console.log(a); // Result: [“Hello”, “beauty”, “there”]

Google ‘JS String splitting to Array’ to learn how to perform this task. Write an example to demonstrate your learning. If you need hints, again, they are at the last page of this homework

*/
//sử dụng phương thức Array.split()
const string = "Hello beauty there";
array = string.split(" ")
console.log(array);


//3.	In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops, try it:

const a = [4, 5, 7, -8];
console.log(...a);


//4.	Write a script to simulate a clothes shop, asking and performing certain tasks from users

let items = [' Jeans ', ' T-Shirt ', ' Socks ']
let userOption = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?').toUpperCase();
 
    if (userOption === 'c')  {
        const newItem = prompt('Enter the name of the new item');
        alert(`Done`);
        items.push(newItem);
        
    }
    else if (userOption === 'r'){
        console.log(`The current items are :`)
        for(let i = 0; i< items.length; i++) {
            console.log(`${i + 1}. ${items[i]}`)
        }
    }
    else if (userOption === 'u') {
        const indexUpdateItem = Number(prompt('Enter the position you want to update'));
        if (updateItem <= items.length) {
        const newNameItem = prompt('Enter the new name');
        items[indexUpdateItem - 1] = newNameItem;
        alert(`Done`);
        } else alert(`Index not exist`);
        
    }
    else if (userOption === 'd') {
        const indexDeleteItem = Number(prompt('Enter the position you want to delete'));
        if (indexDeleteItem <= items.length) {
        items.splice(indexDeleteItem -1, 1);
        alert(`Done`);
        } else alert(`Index not exist`);
        
    }
    else  alert(`This command is not supported`);


//5.	Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users

const sequenceOfNumbers = prompt('Enter a sequence of number, separate by commas (,)');
let arrayOfNumber = sequenceOfNumbers.split(",");
let sum = 0;
for (let i = 0; i < arrayOfNumber.length; i++) {
    sum += Number(arrayOfNumber[i]);
}
alert(`The sum of them is ${sum}`);

//6.	Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users

const sequenceOfNumbers = prompt('Enter a sequence of number, separate by commas (,)');
let arrOfNumber = sequenceOfNumbers.split(",");
let min = Number(arrOfNumber[0]);
for (let i = 0; i < arrOfNumber.length; i++) {
    if ( Number(arrOfNumber[i]) > Number(arrOfNumber[i + 1])) {
        min = arrOfNumber[i + 1];
    }
}
alert(`The smallest number is ${min}`);

//7.	Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so

const array = [3, 4, 6, -9, 10, -88, 2] ;
const num = Number(prompt('Enter a number '));
let i = 0;
// sử dụng vòng lặp while với điều kiện vòng lặp
while (i <= array.length) {
    // kiểm tra số cần tìm nếu có dừng vòng lặp in ra kết quả
    if (num === array[i]){
        alert(`${num} is FOUND in array at index ${i}`);
        break;
    } 
    // nếu không tìm thấy tăng i lên 1 đơn vị
    i++;
    // kiểm tra i với độ dài mảng, nếu nhỏ hơn bắt đầu vòng lặp mới
    // nếu lớn hơn  thì dừng và in ra kết quả (i vẫn tăng chứng tỏ vòng lặp chưa kết thúc => chưa tìm thấy)
    // i lớn hơn độ dài mảng => k thể tiếp tục so sánh => số cần tìm k tồn tại trong mảng
    if ( i > array.length) {
        alert(`${numm} is NOT FOUND in array`);
        break;
    }
}

/*
8.	You are a shepherd who owns a flock of sheep
    Each of your sheep of your flock has varied sizes:
*/

//8.1.	Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:

let sizeOfSheeps = [5, 7, 300, 90, 24, 50, 75];
console.log('Hello, my name is Quyen and here is my sheep sizes: ');
console.log(...sizeOfSheeps);

/*8.2.	At the end of each month, you have to choose one and only one sheep to shear
 and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
*/

let maxSize = Math.max(...sizeOfSheeps);
console.log('');
console.log(`Now my biggest sheep has size ${maxSize}, let's shave it`);

//8.3.	When your biggest sheer, its size will return to the default size, which is 8.

let indexOfMaxSize = sizeOfSheeps.indexOf(maxSize);
sizeOfSheeps[indexOfMaxSize] = 8;
console.log('');
console.log(`After shearing, here is my flock`);
console.log(...sizeOfSheeps);
console.log('');

//8.4.	In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
//8.5.	Let’s do this for 4 months (or as long as you want)
let month = 1;
while(month < 4) {
console.log(`MONTH ${month}`);
for (let i = 0; i < sizeOfSheeps.length; i++) {
    sizeOfSheeps[i] += 50;
}
console.log(`After a month, my sheep have grown, here are their sizes `);
console.log(...sizeOfSheeps);
maxSize = Math.max(...sizeOfSheeps);
console.log(`Now my biggest sheep has size ${maxSize}, let's shave it`);
indexOfMaxSize = sizeOfSheeps.indexOf(maxSize);
sizeOfSheeps[indexOfMaxSize] = 8;
console.log(`After shearing, here is my flock`);
console.log(...sizeOfSheeps);
month++;
}


/*8.6. After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must
now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. 
Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:*/

let totalSize = 0;
for (let i = 0; i < sizeOfSheeps.length; i++) {
    totalSize += sizeOfSheeps[i];
}
console.log(`My flock has size in total: ${totalSize}`);
let totalMoney = totalSize * 2;
console.log(`I would get ${totalSize} * 2$ = ${totalMoney}`);

/*
9.	Given the array

const colors = [‘red’, ‘gray’, ‘blue’, ‘purple’, ‘cyan’];

Use JS Turtle, to draw the following shapes



const colors = ["red", "gray", "blue", "purple", "cyan"];

for (let i = 0; i < colors.length; i++) {
  color(colors[i]);
  for (let j = 1; j < colors.length; j++) {
    fd(50 * i);
    rt(90);
  }
}


*/

/*
10.	(Optional) Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, 
each surrounded with <>. If you need hints, find them at the end of this homework
*/



const sequenceOfNames = prompt('Enter a sequence of names, separate by commas (,) ');
let arrayNames = sequenceOfNames.split(",");

//Cách 1 : tạo mảng rỗng, biến đổi phần tử trong mảng cho trước rồi thêm vào mảng rỗng
let stringNames = [];
for (let i = 0; i < arrayNames.length; i++){
    stringNames[i] = `<${arrayNames[i]}>`;
    
}



/* cách 2 : dùng Array.filter()
let stringNames = arrayNames.map(x => "<" + x + ">");
*/

alert(`${sequenceOfNames} => ${stringNames}`);
 

/*
11.	(Optional) Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd 
Numbers of the entered sequence. If you need hints, they are at the end of this homework
*/

const sequenceNum = prompt('Enter a sequence of number, separate  by commas (,) ');
let arrNum = sequenceNum.split(",");

// Cách 1 : tạo mảng rỗng , kiểm tra các phần tử trong mảng cho trước nếu thỏa mãn => thêm vào mảng rỗng
let sequenceOddNum = [];
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 !== 0) {
        sequenceOddNum.push(arrNum[i])
    }
}


/* Cách 2 : dùng Array.filter()
let sequenceOddNum = arrNum.filter(x  => x % 2 !== 0);
*/

if (sequenceOddNum.length !== 0) {
    alert(`${sequenceNum} => ${[...sequenceOddNum]}`);
} else  alert(`Odd number not exist `);




