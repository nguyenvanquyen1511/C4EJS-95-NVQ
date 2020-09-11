let arrNum = [5, 2, 6, 8, 3 ,1]; 
let temp;
const LENGTH = arrNum.length;

for(let i = 0; i < LENGTH; i++) {
    let check = false;
    for (let j = 0; j < LENGTH - 1 - i; j++) {
      if (arrNum[j] > arrNum[j+1]) {
        temp = arrNum[j];
        arrNum[j] = arrNum[j+1];
        arrNum[j+1] = temp;
        check = true
      }
    }
    if (check === false) {
      break;
    }
}
console.log(arrNum); 