//8.	Write a function, using alert to show your name and one thing you wish to do this year
myFirstFunc = () => {
    let name = "Quyen"
    let wish = "Qua môn :)))"
    alert(`${name}\nOne thing to do this year: ${wish}`)
}
myFirstFunc();
//9.	Write a function, using alert to show user’s name and one wish of the user this year, name and wish are function parameters
/*10.	Write a function, using alert to show user’s name and one wish of the user in this year, name and wish are function parameters.
        Handle the case of missing wish in */
mySecondFunc = (name, wish) => {
    alert(`${name}\nOne thing to do this year: ${wish}`)
}
mySecondFunc("Quyen","Qua mon :))))");
mySecondFunc("Quyen", );// nếu không tryền vào tham số thì mặc định sẽ là undefined


