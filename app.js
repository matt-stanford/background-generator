const css = document.querySelector('h3');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.getElementById('gradient');

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background;

function randomColor() {
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

let randColor1 = randomColor();
let randColor2 = randomColor();

function changeColor() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background;
};

function chooseRandColor1() {
  color1.value = randColor1;
  changeColor();
  randColor1 = randomColor();
}

function chooseRandColor2() {
  color2.value = randColor2;
  changeColor();
  randColor2 = randomColor();
}

color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);

button1.addEventListener('click', chooseRandColor1);
button2.addEventListener('click', chooseRandColor2);
