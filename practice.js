let fruits = [
  {
    name: "Dragon Fruit",
    rotten: false,
    img: "image0",
    id: 0,
  },
  {
    name: "Blackberry",
    img: "image1",
    rotten: false,
    id: 1,
  },
  {
    name: "Tomato",
    img: "image2",
    rotten: true,
    id: 2,
  },
];

let students = [
  {
    name: "Aron",
    studentId: 0,
    passing: false,
  },
  {
    name: "Blake",
    studentId: 1,
    passing: true,
  },
  {
    name: "Kevin",
    studentId: 2,
    passing: true,
  },
  {
    name: "Gabe",
    studentId: 3,
    passing: true,
  },
];

// let fruitBox = document.querySelector(".fruit-box");

// function renderFruit() {
//   fruitBox.innerHTML = "";
//   for (var i = 0; i < fruits.length; i++) {
//     fruitBox.innerHTML += `
//         <section class="fruit">
//         <h2>${fruits[i].name}</h2>
//         <img ${fruits[i].img} />
//         <button id=${fruits[i].id}>Lick</button>
//         </section>`;
//   }
// }
// renderFruit();

// function addFruit(name, img, rotten, id) {
//   let newFruit = {
//     name: name,
//     img: img,
//     rotten: rotten,
//     id: id,
//   };
//   fruits.push(newFruit);
//   renderFruit();
// }

// addFruit("Banana", "image3", false, 3);

let estudiantes = document.querySelector(".fruit-box");

function renderStudents() {
  estudiantes.innerHTML = "";
  for (var i = 0; i < students.length; i++) {
    estudiantes.innerHTML += `
        <section class="student">
        <h2>${students[i].name}</h2>
        <img ${students[i].img} />
        <button id=${students[i].id}>Lick</button>
        </section>`;
  }
}
renderStudents();

function addStudent(name, studentId, passing) {
  let newStudent = {
    name: name,
    studentId: studentId,
    passing: passing,
  };
  students.push(newStudent);
  renderStudents();
}

addStudent("Rajy", 6, true);
