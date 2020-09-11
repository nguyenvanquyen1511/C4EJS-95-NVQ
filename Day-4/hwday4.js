//1
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };

// for (let x in product) {
//     console.log(x);
// }
// //1.1: property
// //1.2 use for loop
// for (let x in product) {
//     console.log(`${x}: ${product[x]}`);
// }

//2. Use one line of code to destructure to obtain subject, dueDate and assignTo from this object:
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18 : 00 : 24+0000',
//     expectedHours: 0.5,
// };

// const {subject, dueDate, assignTo} = task;

//3.
const jobSearch = "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js"
      
// dài quá dán link thôi kéo mệt lắm :)))))))) 
 
  
//3.1  Object
//3.2 Array
//3.3.	In each hit of hits, how to find the job’s title, locations, salary, benefits, skills and requirements

for (let i in jobSearch.hits) {
  // truy cập vào bên trong array hits (phá 1 cặp {} và 1 cặp [])
  let {
    jobTitle,
    locationVIs,
    jobSalary,
    benefits,
    skills,
    jobRequirement,
  } = jobSearch.hits[i];
  console.log("=======================================");
  console.log(jobTitle);
  console.log(`Địa điểm: ${[...locations]}`);
  console.log(`Lương: ${jobSalary}`);
  for (let j = 0; j < benefits.length; j++) {
    let { benefitName, benefitValue } = benefits[j];
    console.log(`${benefitName}: ${benefitValue}`);
  }
  console.log(`Kĩ năng: ${skills}`);
  console.log(jobRequirement);
}

//4. Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table
let devDictionary = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it",
  done:
    "When youe task is complete, the only thing you have to do is to wait for users to use it (no additional codes or action needed)",
  defect: "The formal word for 'error' ",
  pm:
    "The short version of Project Manager, the person in charge of the final result of a project",
  ui_ux:
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};
//4.1.	Write a script to simulate the lookup of the dictionary initialized in the previous example
//4.2.	Update your script so that it can let users contribute the explanation to the dictionary

const keyword = prompt("Enter a keyword").toLowerCase();
if (keyword in dictionary) {
  alert(`${keyword}\n${dictionary[keyword]}`);
} else {
  let explanation = prompt(
    `We could not find: ${keyword}, leave your explanation`
  );
  while (!explanation) {
    explanation = prompt(
      `We could not find: ${keyword}, leave your explanation`
    );
  }
  dictionary[keyword] = explanation;
  alert(`Done`);
  alert(`${keyword}\n${dictionary[keyword]}`);
}

//5.	Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color
let products = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "White",
    category: "Charger",
  },
  {
    name: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color: "black",
    category: "Phone",
  },
  {
    name: "IPhone X",
    brand: "Apple",
    price: 21490,
    color: "Gray",
    category: "Phone",
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone",
  },
];
//5.1.	Print/log name and price of all the products out
for (let i in products) {
  let { name, price } = products[i];
  console.log(`=========================`);
  console.log(`Name: ${name}`);
  console.log(`Price: ${price}`);
}
//5.2.	Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
{
  for (let i in products) {
    let { name, price } = products[i];
    console.log(`#${Number(i) + 1}. ${name}`);
    console.log(`       Price: ${price}`);
  }

  while (true) {
    const productPos = Number(prompt("Enter product position"));
    if (productPos > 0 && productPos <= products.length) {
      // kiểm tra vị trí nhập vào có tồn tại không
      prod = products[productPos - 1];
      for (let j in prod) {
        console.log(`${j}: ${prod[j]}`);
      }
      break;
    } else alert(`Position not exist`);
  }
}
//5.3.	Write a script printing/logging out the products based on category input by users
{
  let check;
  while (true) {
    const inputCategory = prompt("Enter your category:").toLowerCase();
    check = false;
    for (let i in products) {
      let { name, price, category } = products[i];
      if (inputCategory === category.toLowerCase()) {
        console.log("=========================================");
        console.log(`Name: ${name}`);
        console.log(`Price: ${price}`);
        check = true;
      }
    }
    if (check === false) {
      alert("Category doesn't exist!");
    } else break;
  }
}

//5.4.	Add providers to each product

products[0].providers = ["Phukienzero", "Dientuccc"];
products[1].providers = ["Tgdd", "Ddghn", "VhStore"];
products[2].providers = ["Tgdd"];
products[3].providers = ["Tgdd"];

for (let i in products) {
  let { name, price, providers } = products[i];
  console.log(`#${Number(i) + 1}. ${name}`);
  console.log(`       Price: ${price}`);
  console.log(`       Providers: ${[...providers]}`);
}

//5.5.	(Optional) Search the products based on the wanted provider entered by users, if you need more directions, find the hints at the end of this homework

let isFound;
while (true) {
  const enterPro = prompt("Enter a provider:").toLowerCase();
  isFound = false;
  for (let i in products) {
    let prod = products[i],
      { name, brand, price, color, category, providers } = prod;
    for (let j in providers) {
      let indexProvider = providers[j].toLowerCase().indexOf(enterPro);
      if (indexProvider !== -1) {
        console.log("--------------------------------------");
        for (const property in prod) {
          console.log(`${property}: ${prod[property]}`);
        }
        isFound = true;
      }
    }
  }
  if (isFound === false) {
    alert("Not found ");
  } else break;
}

//6.	Write a script to store and process the learning tasks to become a front-end developer
let feDev = [
  { task: "HTML", complete: false },
  { task: "CSS", complete: false },
  { task: "Basics of Javascript", complete: false },
  { task: "Node Package Manager(npm)", complete: false },
  { task: "Git", complete: false },
];
//6.1.	Print it out
console.log(
  `Hi there, this is your learning  tasks to front-end develop career: `
);
let hasSkill;
for (let i in feDev) {
  let { task, complete } = feDev[i];
  // if này dành cho phần 6.6 
  if (complete === true) {
    hasSkill = 'x';
  } else hasSkill = " ";
  console.log(`${Number(i) + 1}. [${hasSkill}] ${task}`);
  
}
console.log(`=====================================================`);
// 6.2(3, 4, 5).	Let users add , update, delete , complete task.
while (true) {
  const yourCmd = prompt(
    "Enter your command (New, Delete, Update, Complete"
  ).toLowerCase();
  // add task
  if (yourCmd === "new") {
    const newTask = prompt("Enter new task");
    feDev[feDev.length] = { task: newTask, complete: false };
    for (let i in feDev) {
      let { task, complete } = feDev[i];
      if (complete === true) {
        hasSkill = 'x';
      } else hasSkill = " ";
      console.log(`${Number(i) + 1}. [${hasSkill}] ${task}`);
      
    }
    console.log(`=====================================================`);
  }
  //delete task
  else if (yourCmd === "delete") {
    while (true) {
      const deletePosition = Number(prompt("Enter position"));
      if (deletePosition <= feDev.length) {
        feDev.splice(deletePosition - 1, 1);
        for (let i in feDev) {
          let { task, complete } = feDev[i];
          if (complete === true) {
            hasSkill = 'x';
          } else hasSkill = " ";
          console.log(`${Number(i) + 1}. [${hasSkill}] ${task}`);
          
        }
        console.log(`=====================================================`);
        break;
      } else console.log(`Position not exist`);
    }
    break;
  }
  // update task
  else if (yourCmd === "update") {
    while (true) {
      const updatePosition = Number(prompt("Enter position"));
      if (updatePosition <= feDev.length) {
        const newTitle = prompt("Enter new title");
        feDev[updatePosition].task = newTitle;
        for (let i in feDev) {
          let { task, complete } = feDev[i];
          if (complete === true) {
            hasSkill = 'x';
          } else hasSkill = " ";
          console.log(`${Number(i) + 1}. [${hasSkill}] ${task}`);
          
        }
        console.log(`=====================================================`);
        break;
      } else console.log(`Position not exist`);
    }
    break;
  }
  //complete
  else if (yourCmd === "complete") {
    while (true) {
      const completePosition = Number(prompt("Enter position"));
      if (completePosition <= feDev.length) {
        feDev[completePosition].complete = true;
        for (let i in feDev) {
          let { task, complete } = feDev[i];
          if (complete === true) {
            hasSkill = 'x';
          } else hasSkill = " ";
          console.log(`${Number(i) + 1}. [${hasSkill}] ${task}`);
          
        }
        console.log(`=====================================================`);
        break;
      } else console.log(`Position not exist`);
    }
    break;
  } else console.log(`Not found`);
}
//7.	Given the object
 // Move the turtle to the provided position, use penup() and pendown() to NOT leave any traces

  const pos = {
    x: 200,
    y: 50
  }

  penup();
  rt(90);
  fd(pos.x);
  lt(90);
  fd(pos.y);



// 8.	Given the object

const square = {
  x: 100,
  y: 50,
  width: 20,
};

//Use JS Turtle, to draw a square at position (x, y) with size width


  penup();  
  rt(90);
  fd(square.x);
  lt(90);
  fd(square.y);
  pendown(); 
  for (let i = 0; i < 4; i++) {
    fd(square.width);
    rt(90);
  }


//9.	Given the object

const rect = {
  x: 100, 
  y: 50,
  width: 20,
  height: 40,
};

//Use JS Turtle, to draw a rectangle at position (x, y) with size width and height


  penup();  
  rt(90);
  fd(rect.x);
  lt(90);
  fd(rect.y);
  pendown();
  for (let i = 0; i < 2; i++) {
    
    fd(rect.height);
    rt(90);
    fd(rect.width);
    rt(90);
  }



// 10.

const cmds = [
  {
      shape: 'square',
      x: 20,
      y: 40,
      width: 50,
  },
  {
      shape: 'rect',
      x: 8,
      y: 70,
      width: 12,
      height: 40,
  },
  {
      shape: 'rect',
      x: 70,
      y: 70,
      width: 12,
      height: 40,
  },
  {
      shape: 'rect',
      x: 10,
      y: 20,
      width: 70,
      height: 20,
  },
  {
      shape: 'square',
      x: 25,
      y: 40,
      width: 14,
  },
  {
      shape: 'square',
      x: 33,
      y: 42,
      width: 6,
  },
  {
      shape: 'square',
      x: 50,
      y: 40,
      width: 14,
  },
  {
      shape: 'square',
      x: 58,
      y: 42,
      width: 6,
  },
  {
      shape: 'square',
      x: 40,
      y: 25,
      width: 8,
  },
  {
      shape: 'square',
      penWidth: 1,
      x: 500,
      y: 500,
      width: 15,
  },
];

for (let i = 0; i < cmds.length - 1; i++) {
  let {shape, x, y, width, height, penWidth} = cmds[i];
  if (shape === 'square') {
    penup();  
    rt(90);
    fd(x);
    lt(90);
    fd(y);
    pendown(); 
    for (let i = 0; i < 4; i++) {
      fd(width);
      rt(90);
    }
    home();
  } else {
    penup();  
    rt(90);
    fd(x);
    lt(90);
    fd(y);
    pendown();
    for (let j = 0; i < 2; i++) {
      
      fd(height);
      rt(90);
      fd(width);
      rt(90);
    }
    home();    
  }
  penup();  
    rt(90);
    fd(x);
    lt(90);
    fd(y);
    pendown(); 
    for (let i = 0; i < 4; i++) {
      penwidth(penWidth);
      fd(width);
      rt(90);
    }
};



















