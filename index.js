import { sliderFunc } from "./slider.js";

function $(id) {
  return document.getElementById(id);
}

let framesArr = [
  $("last-left"),
  $("secondary-left"),
  $("active-slide"),
  $("secondary-right"),
  $("last-right"),
];

let workingArr = [];

let btnRight = document.getElementById("rightBtn");
let btnLeft = document.getElementById("leftBtn");

// onload = (event) => {
//   framesArr.forEach((el, ind) => {
//     el.innerText = workingArr[ind];
//   });
// };

btnRight.addEventListener("click", () => {
  sliderFunc(workingArr, framesArr, "RIGHT");
  //   if (framesArr[2].innerText === "this is last") {
  //     rightClickCounter = -2;
  //   }
  //   framesArr.forEach((el, ind) => {
  //     if (!workingArr[ind + rightClickCounter]) {
  //       el.innerText = "this is empty";
  //     } else el.innerText = workingArr[ind + rightClickCounter];
  //     if (!workingArr[ind + rightClickCounter] && el.id === "active-slide") {
  //       el.innerText = "this is last";
  //       //   rightClickCounter = 0;
  //     }
  //   });
  //   rightClickCounter++;
});
btnLeft.addEventListener("click", () => {
  sliderFunc(workingArr, framesArr, "LEFT");
  // if (framesArr[2].innerText === "this is last") {
  //   leftClickCounter = workingArr.length - 2;
  // }
  // framesArr.forEach((el, ind) => {
  //   if (ind === 0 && workingArr[ind - leftClickCounter] === undefined) {
  //     el.innerText = "this is empty";
  //   } else if (ind === 1 && workingArr[ind - leftClickCounter] === undefined) {
  //     el.innerText = "this is empty";
  //   } else el.innerText = workingArr[ind - leftClickCounter];
  //   if (ind === 2 && workingArr[ind - leftClickCounter] === undefined) {
  //     el.innerText = "this is last";
  //   }
  // });
  // leftClickCounter++;
});

fetch("https://reqres.in/api/users?page=2")
  .then((res) => res.json())
  .then((dataLoad) => {
    dataLoad.data.forEach((element) => {
      // let imgContainer = document.createElement('div');
      // let img = document.createElement('img');
      // img.src = element.avatar;
      // imgContainer.appendChild(img)
      // imgContainer.classList.add('img-container')
      // slider.appendChild(imgContainer)
      // console.log(element.avatar);
      let img = document.createElement("img");
      img.src = element.avatar;
      img.id = element.email;
      let item = {id: element.email, img}
      // console.log(element)
      workingArr.push(item);
    });
    framesArr.forEach((el, ind) => {
      // let img = document.createElement('img')
      // img.src = workingArr[ind];
      // console.log(el)
      el.appendChild(workingArr[ind].img);
    });
  });
// function sliderFunc(sourceArray, framesArray, direction) {
//   let lastLeft = document.getElementById("last-left");
//   let secondaryLeft = document.getElementById("secondary-left");
//   let activeSlide = document.getElementById("active-slide");
//   let secondaryRight = document.getElementById("secondary-right");
//   let lastRight = document.getElementById("last-right");

//   let indexOfLastLeft = sourceArray.indexOf(lastLeft.innerText);
//   let indexOfLastRight = sourceArray.indexOf(lastRight.innerText);
//   console.log(indexOfLastLeft);
//   if (direction === "LEFT") {
//     if (
//       sourceArray[indexOfLastLeft - 1] !== undefined &&
//       lastLeft.innerText !== "this is empty"
//     ) {
//       lastRight.innerText = secondaryRight.innerText;
//       secondaryRight.innerText = activeSlide.innerText;
//       activeSlide.innerText = secondaryLeft.innerText;
//       secondaryLeft.innerText = lastLeft.innerText;
//       lastLeft.innerText = sourceArray[indexOfLastLeft - 1];
//     } else if (
//       sourceArray[indexOfLastLeft - 1] === undefined &&
//       lastLeft.innerText !== "this is empty"
//     ) {
//       lastRight.innerText = secondaryRight.innerText;
//       secondaryRight.innerText = activeSlide.innerText;
//       activeSlide.innerText = secondaryLeft.innerText;
//       secondaryLeft.innerText = lastLeft.innerText;
//       lastLeft.innerText = "this is empty";
//     } else if (secondaryLeft.innerText !== "this is empty") {
//       lastRight.innerText = secondaryRight.innerText;
//       secondaryRight.innerText = activeSlide.innerText;
//       activeSlide.innerText = secondaryLeft.innerText;
//       secondaryLeft.innerText = "this is empty";
//       lastLeft.innerText = "this is empty";
//     } else if (activeSlide.innerText !== "this is empty") {
//       lastRight.innerText = "this is empty";
//       secondaryRight.innerText = "this is empty";
//       activeSlide.innerText = sourceArray[sourceArray.length - 1];
//       secondaryLeft.innerText = sourceArray[sourceArray.length - 2];
//       lastLeft.innerText = sourceArray[sourceArray.length - 3];
//     }
//   }
//   if (direction === "RIGHT") {
//     if (sourceArray[indexOfLastRight + 1] !== undefined && lastRight.innerText !== "this is empty") {
//         lastLeft.innerText = secondaryLeft.innerText;
//         secondaryLeft.innerText = activeSlide.innerText;
//         activeSlide.innerText = secondaryRight.innerText;
//         secondaryRight.innerText = lastRight.innerText;
//         lastRight.innerText = sourceArray[indexOfLastRight + 1];
//     }else if(sourceArray[indexOfLastRight + 1] === undefined && lastRight.innerText !== "this is empty"){
//         lastLeft.innerText = secondaryLeft.innerText;
//         secondaryLeft.innerText = activeSlide.innerText;
//         activeSlide.innerText = secondaryRight.innerText;
//         secondaryRight.innerText = lastRight.innerText;
//         lastRight.innerText = 'this is empty';
//     }else if(secondaryRight.innerText !== 'this is empty'){
//         lastLeft.innerText = secondaryLeft.innerText;
//         secondaryLeft.innerText = activeSlide.innerText;
//         activeSlide.innerText = secondaryRight.innerText;
//         secondaryRight.innerText = 'this is empty';
//         lastRight.innerText = 'this is empty';
//     }else if (activeSlide.innerText !== "this is empty"){
//         lastLeft.innerText = "this is empty";
//         secondaryLeft.innerText = "this is empty";
//         activeSlide.innerText = sourceArray[0];
//         secondaryRight.innerText = sourceArray[1];
//         lastRight.innerText = sourceArray[2];
//     }
//   }
// }
