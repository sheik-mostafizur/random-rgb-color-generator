window.onload = () => {
  main();
};
// main function
function main() {
  let increment = 0;
  let bgColorChanged = document.getElementById("color-changed");
  let btn = document.getElementById("colorChangerBtn");
  btn.addEventListener("click", function () {
    let bgColor = generateRGBcolor();
    bgColorChanged.style.backgroundColor = bgColor;
    increment++;
    fullHistory(bgColor, increment);
  });
}

// Generating RGB Random Color
function generateRGBcolor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}
// History
function fullHistory(bgColor, increment) {
  let ul = document.getElementById("history");
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.style.backgroundColor = bgColor;
  li.innerText = increment + ") " + bgColor;
  ul.insertBefore(li, ul.children[0]);
  console.log(increment);
}
// Reset
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  let bgColorChanged = document.getElementById("color-changed");
  bgColorChanged.style = "";
  let ul = document.getElementById("history");
  ul.innerHTML = "";
});
