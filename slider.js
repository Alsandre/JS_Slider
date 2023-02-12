export const sliderFunc = (sourceArray, framesArray, direction) => {
    let lastLeft = document.getElementById("last-left");
    let secondaryLeft = document.getElementById("secondary-left");
    let activeSlide = document.getElementById("active-slide");
    let secondaryRight = document.getElementById("secondary-right");
    let lastRight = document.getElementById("last-right");
  
    let indexOfLastLeft = sourceArray.indexOf(lastLeft.innerText);
    let indexOfLastRight = sourceArray.indexOf(lastRight.innerText);
    console.log(indexOfLastLeft);
    if (direction === "LEFT") {
      if (
        sourceArray[indexOfLastLeft - 1] !== undefined &&
        lastLeft.innerText !== "this is empty"
      ) {
        lastRight.innerText = secondaryRight.innerText;
        secondaryRight.innerText = activeSlide.innerText;
        activeSlide.innerText = secondaryLeft.innerText;
        secondaryLeft.innerText = lastLeft.innerText;
        lastLeft.innerText = sourceArray[indexOfLastLeft - 1];
      } else if (
        sourceArray[indexOfLastLeft - 1] === undefined &&
        lastLeft.innerText !== "this is empty"
      ) {
        lastRight.innerText = secondaryRight.innerText;
        secondaryRight.innerText = activeSlide.innerText;
        activeSlide.innerText = secondaryLeft.innerText;
        secondaryLeft.innerText = lastLeft.innerText;
        lastLeft.innerText = "this is empty";
      } else if (secondaryLeft.innerText !== "this is empty") {
        lastRight.innerText = secondaryRight.innerText;
        secondaryRight.innerText = activeSlide.innerText;
        activeSlide.innerText = secondaryLeft.innerText;
        secondaryLeft.innerText = "this is empty";
        lastLeft.innerText = "this is empty";
      } else if (activeSlide.innerText !== "this is empty") {
        lastRight.innerText = "this is empty";
        secondaryRight.innerText = "this is empty";
        activeSlide.innerText = sourceArray[sourceArray.length - 1];
        secondaryLeft.innerText = sourceArray[sourceArray.length - 2];
        lastLeft.innerText = sourceArray[sourceArray.length - 3];
      }
    }
    if (direction === "RIGHT") {
      if (sourceArray[indexOfLastRight + 1] !== undefined && lastRight.innerText !== "this is empty") {
          lastLeft.innerText = secondaryLeft.innerText;
          secondaryLeft.innerText = activeSlide.innerText;
          activeSlide.innerText = secondaryRight.innerText;
          secondaryRight.innerText = lastRight.innerText;
          lastRight.innerText = sourceArray[indexOfLastRight + 1];
      }else if(sourceArray[indexOfLastRight + 1] === undefined && lastRight.innerText !== "this is empty"){
          lastLeft.innerText = secondaryLeft.innerText;
          secondaryLeft.innerText = activeSlide.innerText;
          activeSlide.innerText = secondaryRight.innerText;
          secondaryRight.innerText = lastRight.innerText;
          lastRight.innerText = 'this is empty';
      }else if(secondaryRight.innerText !== 'this is empty'){
          lastLeft.innerText = secondaryLeft.innerText;
          secondaryLeft.innerText = activeSlide.innerText;
          activeSlide.innerText = secondaryRight.innerText;
          secondaryRight.innerText = 'this is empty';
          lastRight.innerText = 'this is empty';
      }else if (activeSlide.innerText !== "this is empty"){
          lastLeft.innerText = "this is empty";
          secondaryLeft.innerText = "this is empty";
          activeSlide.innerText = sourceArray[0];
          secondaryRight.innerText = sourceArray[1];
          lastRight.innerText = sourceArray[2];
      }
    }
  }
  