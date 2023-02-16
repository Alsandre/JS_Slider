export const sliderFunc = (sourceArray, framesArray, direction) => {
  let lastLeft = document.getElementById("last-left");
  let secondaryLeft = document.getElementById("secondary-left");
  let activeSlide = document.getElementById("active-slide");
  let secondaryRight = document.getElementById("secondary-right");
  let lastRight = document.getElementById("last-right");

  let indexOfLastLeft;
  sourceArray.forEach((el, ind) => {
    if (lastLeft.childNodes[0] && lastLeft.childNodes[0].id == el.id) {
      indexOfLastLeft = ind;
    }
  });
  let indexOfLastRight;
  sourceArray.forEach((el, ind) => {
    if (lastRight.childNodes[0] && lastRight.childNodes[0].id == el.id) {
      indexOfLastRight = ind;
    }
  });
  // console.log(lastLeft.childNodes[0].id)
  // console.log(sourceArray[0] == lastLeft.innerHTML)
  // console.log(indexOfLastLeft);
  if (direction === "LEFT") {
    if (
      sourceArray[indexOfLastLeft - 1] !== undefined &&
      lastLeft.innerHTML !== ""
    ) {
      lastRight.innerHTML = secondaryRight.innerHTML;
      secondaryRight.innerHTML = activeSlide.innerHTML;
      activeSlide.innerHTML = secondaryLeft.innerHTML;
      secondaryLeft.innerHTML = lastLeft.innerHTML;
      console.log(indexOfLastLeft);
      lastLeft.replaceChild(
        sourceArray[indexOfLastLeft - 1].img,
        lastLeft.childNodes[0]
      );
    } else if (
      sourceArray[indexOfLastLeft - 1] === undefined &&
      lastLeft.innerHTML !== ""
    ) {
      lastRight.innerHTML = secondaryRight.innerHTML;
      secondaryRight.innerHTML = activeSlide.innerHTML;
      activeSlide.innerHTML = secondaryLeft.innerHTML;
      secondaryLeft.innerHTML = lastLeft.innerHTML;
      lastLeft.innerHTML = "";
    } else if (secondaryLeft.innerHTML !== "") {
      lastRight.innerHTML = secondaryRight.innerHTML;
      secondaryRight.innerHTML = activeSlide.innerHTML;
      activeSlide.innerHTML = secondaryLeft.innerHTML;
      secondaryLeft.innerHTML = "";
      lastLeft.innerHTML = "";
    } else if (activeSlide.innerHTML !== "") {
      console.log();
      lastRight.innerHTML = "";
      secondaryRight.innerHTML = "";
      activeSlide.replaceChild(
        sourceArray[sourceArray.length - 1].img,
        activeSlide.childNodes[0]
      );
      secondaryLeft.appendChild(sourceArray[sourceArray.length - 2].img);
      lastLeft.appendChild(sourceArray[sourceArray.length - 3].img);

      // activeSlide.childNodes[0] = sourceArray[sourceArray.length - 1].img;
      // secondaryLeft.childNodes[0] = sourceArray[sourceArray.length - 2].img;
      // lastLeft.childNodes[0] = sourceArray[sourceArray.length - 3].img;
    }
  }
  if (direction === "RIGHT") {
    if (
      sourceArray[indexOfLastRight + 1] !== undefined &&
      lastRight.innerHTML !== ""
    ) {
      lastLeft.innerHTML = secondaryLeft.innerHTML;
      secondaryLeft.innerHTML = activeSlide.innerHTML;
      activeSlide.innerHTML = secondaryRight.innerHTML;
      secondaryRight.innerHTML = lastRight.innerHTML;
      lastRight.replaceChild(
        sourceArray[indexOfLastRight + 1].img,
        lastRight.childNodes[0]
      );
    } else if (
      sourceArray[indexOfLastRight + 1] === undefined &&
      lastRight.innerHTML !== ""
    ) {
      lastLeft.innerHTML = secondaryLeft.innerHTML;
      secondaryLeft.innerHTML = activeSlide.innerHTML;
      activeSlide.innerHTML = secondaryRight.innerHTML;
      secondaryRight.innerHTML = lastRight.innerHTML;
      lastRight.innerHTML = "";
    } else if (secondaryRight.innerHTML !== "") {
      lastLeft.innerHTML = secondaryLeft.innerHTML;
      secondaryLeft.innerHTML = activeSlide.innerHTML;
      activeSlide.innerHTML = secondaryRight.innerHTML;
      secondaryRight.innerHTML = "";
      lastRight.innerHTML = "";
    } else if (activeSlide.innerHTML !== "") {
      lastLeft.innerHTML = "";
      secondaryLeft.innerHTML = "";
      activeSlide.replaceChild(sourceArray[0].img, activeSlide.childNodes[0]);
      secondaryRight.appendChild(sourceArray[1].img);
      lastRight.appendChild(sourceArray[2].img);
    }
  }
};
