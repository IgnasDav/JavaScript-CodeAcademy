"use strict";

const btnAll = document.querySelector(".main__btns");
const btnTriangle = document.querySelector(".btn--triangle");
const btnPyramid = document.querySelector(".btn--pyramid");
const btnReversePyramid = document.querySelector(".btn--reverse--pyramid");
const btnClear = document.querySelector(".btn--clear");
const star = document.querySelector(".fa-star");
const btnDiamond = document.querySelector(".btn--diamond");
const figure = document.querySelector(".figure");
const numInput = document.querySelector(".main__number");

// 1) Triangle
function drawTriangle() {
  const rows = numInput.value;
  let string = "";
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
      string += "* ";
    }
    string += "<br>";
  }
  figure.innerHTML = `${string}`;
}
//2) Pyramid
function drawPyramid() {
  const rows = numInput.value;
  let string = "";
  for (let i = 0; i <= rows; i++) {
    for (let k = 0; k < rows - i; k++) {
      string += "&nbsp;";
    }
    for (let j = 0; j < i; j++) {
      string += "* ";
    }
    string += "<br>";
  }
  figure.innerHTML = `${string}`;
}
// 3) Reverse Pyramid
function drawReversePyramid() {
  const rows = numInput.value;
  let string = "";
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
      string += "&nbsp;";
    }
    for (let k = 0; k < rows - i; k++) {
      string += "* ";
    }
    string += "<br>";
  }
  figure.innerHTML = `${string}`;
}
// 4) Diamond shape
function drawDiamond() {
  const rows = numInput.value;
  let string = "";
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < rows - i; j++) {
      string += "&nbsp;";
    }
    for (let k = 0; k < i; k++) {
      string += "* ";
    }
    string += "<br>";
  }
  for (let l = 0; l <= rows; l++) {
    for (let h = 0; h < l; h++) {
      string += "&nbsp;";
    }
    for (let f = 0; f < rows - l; f++) {
      string += "* ";
    }
    string += "<br>";
  }
  figure.innerHTML = `${string}`;
}
//5) Clear function
function clear() {
  numInput.value = "";
  figure.innerHTML = "";
}

btnClear.addEventListener("click", clear);
btnTriangle.addEventListener("click", drawTriangle);
btnPyramid.addEventListener("click", drawPyramid);
btnReversePyramid.addEventListener("click", drawReversePyramid);
btnDiamond.addEventListener("click", drawDiamond);
