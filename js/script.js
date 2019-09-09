// A small util for referencing our targets
const getEl = id => document.getElementById(id);
// Creating an array of DOM elements for each 'change-able' color
const colorBoxElements = ["red", "green", "blue"].map(color => getEl(color));

// NOTE: If we wanted to not use inline event listeners (ex. wanted to attach more than one per element)
// Here I'm using the element's id as the color value to pass to our event handler.
const colorBoxButtons = document.querySelectorAll(".box__button");
colorBoxButtons.forEach(el => {
  el.addEventListener("click", () => setColors(el.parentNode.id), false);
});

function setColors(color) {
  const isReset = color === "white";
  colorBoxElements.forEach(boxEl => {
    let targetColor = isReset ? boxEl.id : color;
    boxEl.className = `box box--${targetColor}`;
  });
  // Notify assistive tech of color changes
  const statusEl = getEl("status");
  const colorChange = isReset ? "original: red, green, blue" : color;
  statusEl.innerText = `Non-white box colors changed to ${colorChange}`;
}
