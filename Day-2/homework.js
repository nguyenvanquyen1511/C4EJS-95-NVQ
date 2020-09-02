
/*
1.	let vs var vs const
Learn about let, var and const by
-	Reading these tutorials:
-	var, let and const, what is the difference?
-	var vs let vs const in JavaScript
		
Hoặc xem video sau

-	MindX - C4EJS - let vs var vs const

Then answer the following questions:
1.	What are var and const in JavaScript?
2.	What are the differences between let and var?
3.	What are the differences between let and const?
4.	What to use in what cases?
*/

/*
1. var và const là các từ khóa dùng để khai báo biến trong Javascript
2. Điểm khác biệt giữa let và var là :
    - scope
    - let không thể khai báo lại biến giống var
        + let age = 15;
          let age = 18; ==> sai
    
3. Điểm khác biệt giữa let và const : const cố định giá trị của biến ==> không thể thay đổi giá trị của biến
4. Dùng const trong trường hợp ta muốn cố định giá trị của một biến nào đó,
 dùng let trong trường hợp ta có thể cần phải thay đổi giá trị của biến đó còn var thì không nên dùng vì nếu dùng 
 ta phải nhớ các đoạn code mà ta thay đổi giá trị của nó (let mà ra ngoài block scope thì không cần quan tâm)
 */

/*
 2.	Boolean
Learn about Boolean by
-	Reading these tutorials:
-	A Boolean (logical type) and Logical operators
-	JavaScript Boolean explained

Hoặc xem video sau

-	MindX - C4EJS - Boolean

	Then answer the following questions:
1.	What is Boolean?
2.	What results in Boolean
 */

/*
 1. là một kiểu dữ liệu dùng để kiểm tra tính đúng sai
 2. boolean chỉ trả về 2 giá trị là true và false
 */

/*
 3.	Write a program to print out
a.	7 numbers, starting from 0 (no user input)*/
// for(let i = 0;i < 7;i++) {
//     console.log(i);
// }
// /*
// b.	n numbers, starting from 0, n entered by user*/
// let num = prompt('Enter a number')
// for(let i = 0;i < num;i++) {
//     console.log(i);
// }
// /*
// c.	A sequence of numbers, starting from 3, ending before n, n entered by user*/
// let endNumber = prompt('Enter a number')
// for(i = 3;i < endNumber;i++) {
//     console.log(i);
//}
/*
d.	A sequence of numbers, starting from c, ending before n, c and n entered by user 
let startNumber = prompt('Enter c');
let endNumber = prompt('Enter n');
for(let i = startNumber; i < endNumber; i++) {
    console.log(strartNumber);
}
*/

/*
e.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user 
let startNumber = prompt('Enter c');
let endNumber = prompt('Enter n');
for(let i = startNumber; i < endNumber; i + 3) {
    console.log(startNumber);
}
*/

/*
f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
let startNumber = prompt('Enter c');
let endNumber = prompt('Enter n');
let stepNumber = prompt('Enter s');
for(let i = startNumber; i < endNumber; i + stepNumber) {
    console.log(i);
}
*/

/*
4.	Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
let num = prompt('Enter n');
let factorial = 1;
for(let i = 1; i <= n; i++) {
    factorial *= i;
}
alert('The factorial of ' + n + ' is ' + factorial);
*/

/* 
5.	Write a program asking users their age, and then decide if they are old enough to view a 14+ content
*/
// let age = prompt('How old are you?');
// if(age < 14){
//     alert('You are not old enough to view this content')
// } else alert('Enjoy!')
// /*
// 6.	Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
// */
// let num = prompt('Enter a number');
// if(num < 9/2) {
//     alert('Lower half of 9')
// } else alert('Higher half of 9')
/*
7.	Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
let num1 = prompt('n = ')
let num2 = prompt('x = ');
if(num2 < num1/2) {
    alert(num2 + ' is in lower half of ' + num1)
} else alert(num2 + ' is in higher half of ' + num1)
*/

/*
8.	Write a script to check if a number is even (divisible by 2) or odd number
let num = prompt('Enter a number');
if( num % 2 === 0){
    alert(num + ' is an even number')
} alert(num + ' is an odd number')
*/

/*
9.	Write a program to print out
    a.	6 L’s and H’s, half L’s, half H’s (L means low, H means high)

    for(let i = 0; i < 6; i++ ){
        if(i < 3) {
            console.log('L');
        } else console.log('H');
    }

    b.	n L’s and H’s in total, n entered by user

    let num = prompt('Enter a number');
    for(let i = 0; i < n; i++) {
        if( i < num/2 +1) {
            console.log(L)
        } else console.log(H)
    }

    c.	8 1’s and 0’s in total, consecutively

    for(let i = 0; i < 8; i++) {
        if(i % 2 === 0) {
            console.log('1')
        } else console.log('0')
    }

    d.	n 1’s and 0’s in total, consecutively, n entered by user

    let num = prompt('Enter a number');
    for(let i = 0; i < num; i++) {
        if(i % 2 === 0) {
            console.log('1')
        } else console.log('0')
    }

*/

/*
10.	Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows

BMI (Body Mass Index):
BMI = mass (kg) / (height(m) x height(m))
Note: you must do the conversion from cm to m before calculation

And then based on the calculated BMI, tell them that they are:
●	Severely underweight if BMI < 16
●	Underweight if BMI is between 16 and 18.5
●	Normal if BMI is between 18.5 and 25 
●	Overweight if BMI is between 25 and 30
●	Obese if BMI is more than 30

*/
// let weightInKg = prompt('Your weight in kg ');
// let heightInCm = prompt('Your height in Cm');
// let heightInM = heightInCm/100;
// let bodyMassIndex = weightInKg / (heightInM * heightInM)
// alert('Your BMI  is ' + bodyMassIndex);
// switch(bodyMassIndex) {
//     case bodyMassIndex < 16 :
//         alert('You are severely underweight')
//         break;
//     case 16 <= bodyMassIndex < 18.5 :
//         alert('You are underweight');
//         break;
//     case 18.5 <= bodyMassIndex < 25 :
//         alert('You are normal');
//         break;
//     case 25 <= bodyMassIndex < 30 :
//         alert('You are overweight');
//         break;
//     default : alert('You are obese');

// }

// Turtle exercise

/* 
11.	Use JS Turtle, to draw the following shapes
a. A square
for(let i = 0; i < 4; i++) {
    fd(50);
    rt(90);
}
b. A triangle
for(let i = 0; i < 3; i++) {
    fd(50);
    rt(120);
}
c. A pentagon
for(let i = 0; i < 5; i++) {
    fd(50);
    rt(72);
}
d. A hexagon
for(let i = 0; i < 6; i++) {
    fd(50);
    rt(60);
}

*/

/*

12.	Use JS Turtle to draw a polygon, the number of polygon’s edges entered by user

let num = prompt('Enter number of edges');

for(let i = 0; i < n; i++) {
    fd(50);
    rt(360/n)
}

*/

//13.	(Optional) Use JS Turtle to draw n polygons, n entered by users
let num = prompt("Enter a number of polygons ");
let edges = prompt('Enter number of edges')
for (let j = 0; j < num; j++) {
  for (let i = 0; i < edges; i++) {
    fd(50);
    rt(360 / edges);
    edges--;
  }
}

/* 
So sánh template string và string : 
trong tempalte string có thể chèn thêm biểu thức bằng cách chèn vào trong ${ }.
*/
