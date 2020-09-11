/*
Tạo ra một object chứa thông tin về cầu thủ Cristiano Ronaldo, bao gồm tên, năm sinh, quốc tịch.
Hỏi người dùng có muốn nhập thêm thông tin của cầu thủ không bằng cách nhập "Y" hoặc "N".
Nếu người dùng nhập "Y", hỏi tiếp người dùng muốn thêm thông tin gì, giá trị cụ thể là gì? Sau đó thêm thông tin người dùng nhập vào object ban đầu.
Nếu người dùng nhập "N", in ra màn hình câu "Good Bye!"
*/

let person = {
  name: "Cristiano Ronaldo",
  age: 35,
  nation: "Portugal",
};

// const option = prompt('Nhập thêm thông tin cầu thủ? (Y or N)');
// if (option === "Y") {
//     const addInfor = prompt('Thông tin cầu thủ muốn thêm: ');
//     const valueOfInfor = prompt('Giá trị cụ thể của thông tin đó: ');
//     person.addInfor() = valueOfInfor;
// } else alert(`Goodbye!`);

// update tất cả thông tin của Ronaldo thành Messi bao gôm tên, tuổi, quốc tịch

person.name = "Messi";
person.age = 33;
person.nation = "Argentina";

// const option = prompt('Xóa thông tin cầu thủ< (Y or N)').toUpperCase();
// if (option === "Y") {
//     const deleteInfor = prompt('Thông tin muốn xóa? (name or age or nation');
//     if (deleteInfor === "name") {
//         delete person.name;
//     } else if (deleteInfor === "age") {
//         delete person.age;
//     } else delete person.nation;
// } else alert(`Goodbye!`);

/*
Tạo 1 object theo mẫu, thực hiện các yêu cầu sau : 

Thêm một property với tên "pocket", với value là một Array bao gồm các phần tử "seashell", "strange berry", và "lint".

Xóa phần tử "dagger" trong Array của property backpack.

Cộng thêm 50 vào giá trị của gold (Giá trị sau khi cộng là 550).

Xóa toàn bộ thông tin liên quan đến pouch.
*/

let inventory = {
  gold: 500,
  pouch: ["flint", "twine", "gemstone"],
  backpack: ["xylophone", "dagger", "bedroll", "bread loaf"],
};

inventory.pocket = ["seashell", "strange berry", "lint"];
inventory.backpack.splice(1, 1);
inventory.gold += 50;
delete inventory.pouch;

/*
Create a variable or a constant and assign the data to it

Print or log the movie count in there
Print or log out the data of the first movie
Print or log out the title, vote_average and the genres of the first movie
Print or log out all the title, vote_average and genres of ALL movies
Write script asking user which genre they like, then print out all of the movie in movies list with that genre
Write a script asking user the minimum rate they want and then print out ALL of the movie above that rate
*/

