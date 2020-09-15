function calculateTips(bill) {
  let tip;
  
    if (bill < 50) {
      tip = bill * 0.2;
    }
    else if (50 <= bill < 200) {
      tip = bill * 0.15;
    }
    else tip = bill * 0.1;
  
  return tip;
}
let bills = [124, 48, 268];
let tips= [];
for (let i in bills) {
  tips[i] = calculateTips(bills[i])
  bills[i] += tips[i]; 

}
console.log(...bills);
console.log(...tips)

//

let person1 = {
    name: 'Mark',
    mass: 50,
    heightInCm: 168,
    calculateBMI : function(mass, heightInCm) {
        return this.mass / (this.heightInCm/100) ** 2;
    }
}

let person2 = {
    name: 'John',
    mass: 55,
    heightInCm: 165,
    calculateBMI : function(mass, heightInCm) {
        return this.mass / (this.heightInCm/100) ** 2;
    }
}
console.log(person1.calculateBMI());
console.log(person2.calculateBMI());
if (person1.calculateBMI() > person2.calculateBMI()) {
    console.log(`${person1.name} has highest BMI with ${person1.calculateBMI()}`)
} else     console.log(`${person2.name} has highest BMI with ${person2.calculateBMI()}`)
