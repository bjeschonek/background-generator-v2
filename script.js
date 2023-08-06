const css = document.querySelector("h3");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("gradient");
const button = document.getElementById("button");

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";
}

const randomColor = () => {
    const rc1 = Math.floor(Math.random()*16777215).toString(16);
    const rc2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = `linear-gradient(to right, #${rc1}, #${rc2})`;
    css.textContent = body.style.background + ";";
    color1.value = `#${rc1}`;
    color2.value = `#${rc2}`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColor);