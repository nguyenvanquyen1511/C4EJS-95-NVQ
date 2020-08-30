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
    - khi khai báo biến với var nếu không gán giá trị thì biến sẽ được khởi tạo với giá trị là undefined,
    còn với let nếu không gán giá trị sẽ xảy ra lỗi
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
for(let i = 0;i < 7;i++) {
    console.log(i);
}
/*
b.	n numbers, starting from 0, n entered by user*/
let n = prompt('Enter a number')
for(let i = 0;i < n;i++) {
    console.log(i);
}
/*
c.	A sequence of numbers, starting from 3, ending before n, n entered by user*/
let n = prompt('Enter a number')
for(i = 3;i < n;i++) {
    console.log(i);
}
/*
d.	A sequence of numbers, starting from c, ending before n, c and n entered by user 
let c = prompt('Enter c');
let n = prompt('Enter n');
for(let i = c ;i < n;c++) {
    console.log(c);
}
*/

/*
e.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user 
let c = prompt('Enter c');
let n = prompt('Enter n');
for(let i = c; i < n; c + 3) {
    console.log(c);
}
*/

/*
f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
let c = prompt('Enter c');
let n = prompt('Enter n');
let s = prompt('Enter s');
for(let i = c; i < n; i + s) {
    console.log(i);
}
*/

/*
4.	Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
let n = prompt('Enter n');
let factorial = 1;
for(let i = 1; i <= n; i++) {
    factorial *= i;
}
alert('The factorial of ' + n + ' is ' + factorial);
*/

/* 
5.	Write a program asking users their age, and then decide if they are old enough to view a 14+ content
*/
let age = prompt('How old are you?');
if(age < 14){
    alert('You are not old enough to view this content')
} else alert('Enjoy!')
/*
6.	Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
*/
let x = prompt('Enter a number');
if(x < 9/2) {
    alert('Lower half of 9')
} else alert('Higher half of 9')
/*
7.	Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
let n = prompt('n = ')
let x = prompt('x = ');
if(x < n/2) {
    alert(x + ' is in lower half of ' + n)
} else alert(x + ' is in higher half of ' + n)
*/

/*
8.	Write a script to check if a number is even (divisible by 2) or odd number
let n = prompt('Enter a number');
if( n % 2 === 0){
    alert(n + ' is an even number')
} alert(n + ' is an odd number')
*/

/*
9.	Write a program to print out
    a.	6 L’s and H’s, half L’s, half H’s (L means low, H means high)
    for(let i = 0; i < 6; i++ ){
        if(i < 3) {
            alert('L');
        } else alert('H');
    }
*/

 


