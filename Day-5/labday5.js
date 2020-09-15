// part 1
// random number from 0 to 1
/*const startNumber = Number(prompt('Start number :'));
const endNumber = Number(prompt('End number'));
let randomNumber = Math.floor(Math.random() * (startNumber - endNumber + 1)) + endNumber;
alert(`Ramdom number from ${startNumber} to ${endNumber} : ${randomNumber}`)*/

// random an item in array

let ramdomValueArray ;
const inputNumber = prompt('Enter sequence number :')
const array = inputNumber.split(',');
let ramdomNumberInArray = array[Math.floor() * (Math.random() * array.length)];
alert(`Random value in array : ${ramdomNumberInArray}`); 

// Create a data structure to represent a list of quizzes, each quiz contains a question, 4 choices and rightChoice. Create it then ask your mentor to review your data before moving to the next exercise

 const listOfQuiz = [
    {
        question: 'How many legs do an octopos has ?',
        answer : {
        1: '4 legs', 
        2: 'no legs', 
        3: '8 legs', 
        4: '2 legs'
        } ,
        result : 2

    },
    {
        question: 'Which country is home to the kangaroo ?',
        answer: {
        1: 'Australia', 
        2: 'Autria', 
        3: 'New Zealand',
        4: 'US'
        }, 
        result : 1
        
    },
    {
        question: 'Which fictional detective lived at 221b Baker Street?',
        answer : {
        1: 'Watson', 
        2: 'Sam Spade', 
        3: 'Scubidu', 
        4: 'Sherlock Home',
        },
        result: 1,
        
    },
    {
        question: 'What sweet food made by bees using nectar from flower?',
        answer : {
        1: 'Bread', 
        2: 'Honey', 
        3: 'Sugar', 
        4: 'Potent', 
        },
        result: 2
    } 
]
// random question
 let ramdomQues = listOfQuiz[Math.floor(Math.random() * listOfQuiz.length)];
 for (let i in listOfQuiz) {
     if (ramdomQues === listOfQuiz[i]) {
         let {question, answer, result} = listOfQuiz[i];
         let allAnswer = " ";
         for (let property in answer) {
            allAnswer += `${property}. ${answer[property]}\n ` 
         }
         const yourAnswer = Number(prompt(`${question}\n${allAnswer}`))
         if (yourAnswer === result) {
             alert(`Correct answer`)
         } else alert(`Incorrect`)

           
     }
 }

// print , let user knows hết câu hỏi , count correct answer:))))
let count = 0
for (let i in listOfQuiz) {
    
    let {question, answer, result} = listOfQuiz[i];
    let allAnswer = " ";
    for (let property in answer) {
        allAnswer += `${property}. ${answer[property]}\n ` 
    }
    const yourAnswer = Number(prompt(`${question}\n${allAnswer}`))
    if (yourAnswer === result) {
        
        count ++;
    }    
}
alert(`Out of questions`);
alert(`Correct answer: ${count}`);
//Part 2
import {jobData} from './data.js'
console.log(jobData.hits);//2
 console.log(jobData.hits[0]);//3
 console.log(jobData.hits[0].jobTitle);//4
 console.log(jobData.hits[0].benefits);//5
 //6
let {benefits, jobTitle, } = jobData.hits[0];
for (let j in benefits) {
         
    let {benefitValue} = benefits[j]
    console.log(`- ${benefitValue} `)    
}
//7
for (let i in jobData.hits) {
    let {jobTitle, benefits} = jobData.hits[i];
    console.log(jobTitle);
    console.log(`Benefits : `)
    for (let j in benefits) {
         
        let {benefitValue} = benefits[j]
        console.log(`- ${benefitValue}`)

    
    } 
}
//8
for (let i in jobData.hits) {
    let {jobTitle, benefits, locations, jobSalary, skills} = jobData.hits[i];
    //Title
    console.log("Title",jobTitle);
    //Salary
    console.log("Salary: ", jobSalary);
    //Locations
    console.log("Locarions")
    for (let loc in locations) {
        console.log(`- ${locations[loc]}`)
    }
    //Benefits
    console.log(`Benefits : `)
    for (let j in benefits) {
         
        let {benefitValue} = benefits[j]
        console.log(`- ${benefitValue}`)

    
    } 
    // Skills
    console.log(`Skills :`)
    for (let j in jobData.hits[i].skills){
        console.log(`- ${jobData.hits[i].skills[j]}\n`)
    }
    console.log(`=====================================`)
}

//Part 3
//3.1
let listOfWords = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
let count = {};
for (let i = 0; i < listOfWords.length; i++) {
    let currentWord = listOfWords[i];
    if (currentWord in count) {
        count[currentWord] = count[currentWord] + 1;
    } else {
        count[currentWord] = 1;
    }
}

for (let key in count) {
    console.log(`${key} : ${count[key]}`);
}
//3.2
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
]
// reshape
let inventoryByBrand = {};
for (let i in inventory) {
    let {brand} = inventory[i];
    currentBrand = brand.toLowerCase();
    if(inventoryByBrand[currentBrand]) {
        inventoryByBrand[currentBrand].push(inventory[i])
    } else {
        inventoryByBrand[currentBrand] = [inventory[i]]
    }

}
console.log(inventoryByBrand);
//3.3 -> 3.6
const inputBrand = prompt('Which brand').toLowerCase();
let allName = '';
let totalValue = 0;
if (inventoryByBrand[inputBrand]) {
  for (let i in inventoryByBrand[inputBrand]) {
    let {name, price, quantity} = inventoryByBrand[inputBrand][i];
    allName += `${name}\n`;
    totalValue += price * quantity; 
  }
  alert(`There are ${inventoryByBrand[inputBrand].length} of '${inputBrand.toUpperCase()}'\n\n${allName}\n\n${totalValue}K`)
}
 









