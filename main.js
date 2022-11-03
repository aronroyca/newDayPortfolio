// // console.log("connected");
// // let sum = (a, b) => a + b;

// // console.log(sum(5, 4));

// // let divBy3 = (x) => {
// //   if (!(x % 3)) {
// //     return x / 3;
// //   } else {
// //     return "Sorry this number is not divisible by three.";
// //   }
// // };

// // console.log(divBy3(5));
// // console.log(divBy3(6));

// // let factor = (a, b, c) => {
// //   let factors = [];
// //   let i = 1;
// //   console.log(Math.min(a, b, c));
// //   while (i <= Math.min(a, b, c)) {
// //     if (a % i === 0 && b % i === 0 && c % i === 0) {
// //       factors.push(i);
// //     }
// //     i++;
// //   }
// //   return factors;
// // };

// // console.log(factor(5, 10, 15));
// // console.log(factor(9, 27, 30));

// // let sum3 = (x, y) => {
// //   if (x === y) {
// //     return x * 3;
// //   } else {
// //     return x + y;
// //   }
// // };

// // console.log(sum3(2, 3));
// // console.log(sum3(3, 3));

// let myCar = {
//   make: "Nissan",
//   model: "300z",
//   year: 1995,
//   color: "black",
//   "last owner": "John Gripshover",

//   description: function () {
//     return `${this.make} ${this.model} ${this.year}`;
//   },
// };

// myCar.city = "Oakland";
// myCar["new owner"] = "Aron Roy";
// myCar["years sold"] = [2002, 2005, 2010, 2015];

// let whereIsIt = myCar.city;
// console.log(myCar.description());

$("document").ready(function () {
  let testimonials = [
    {
      name: "Blake",
      title: "Chief of Designing",
      quote: "Aron is the best!",
      getQuote() {
        if (this.quote !== "" && this.quote !== " ") {
          return `${this.quote}`;
        } else {
          return "A quote does not exist";
        }
      },
    },
    {
      name: "Kevin",
      title: "Chief of People",
      quote: "I second whatever Blake said!",
      getQuote() {
        if (this.quote !== "" && this.quote !== " ") {
          return `${this.quote}`;
        } else {
          return "A quote does not exist";
        }
      },
    },
  ];
  //   console.log(person1.getQuote(), person2.getQuote());

  let testContainer = document.querySelector(".people");
  function testimonialRender() {
    testContainer.innerHTML = "";
    for (let i = 0; i < testimonials.length; i++) {
      testContainer.innerHTML += `
                <div id="person${i}" class="text-center col-sm-6">
                    <img src="assets/${testimonials[i]["name"]}.jpg" width="500px" height="500px" alt="Person ${i}" class="img-fluid my-5">
                    <p class="personName${i}" id="personName${i}">${testimonials[i]["name"]}</p>
                    <p class="personTitle${i}">${testimonials[i]["title"]}</p>
                    <p class="personQuote${i}">${testimonials[i]["quote"]}<i class="text-muted"></i></p>
                </div>`;
    }
  }
  testimonialRender();

  //   $(".personName").text("I am a dinosaur");
  //   $(".personName").css("background-color", "white").css("color", "blue");

  //   $(".personName").on("mouseover", function () {
  //     $(".personName").text("Blake is Blake");
  //   });

  //   $(".formButton").on("click", function () {
  //     $(".formMessage").text($(".formName").val());
  //   });

  //   $(".personName1").text(person1.name);
  //   $(".personTitle1").text(person1.title);
  //   $(".personQuote1").text(person1.quote);
  //   $(".personName2").text(person2.name);
  //   $(".personTitle2").text(person2.title);
  //   $(".personQuote2").text(person2.quote);

  $(".formBtn").click(function () {
    $(".confirmationText").text(
      `Email confirmation has been sent to ${$(".formEmail").val()}`
    );
    console.log($(".formEmail").val());
  });
});
