const el = document.querySelector("#module1");
el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});

const el2 = document.querySelector("#module2");
el2.addEventListener("mousemove", (e) => {
  el2.style.backgroundPositionX = -e.offsetX + "px";
  el2.style.backgroundPositionY = -e.offsetY + "px";
});

const el3 = document.querySelector("#module3");
el3.addEventListener("mousemove", (e) => {
  el3.style.backgroundPositionX = -e.offsetX + "px";
  el3.style.backgroundPositionY = -e.offsetY + "px";
});

const el4 = document.querySelector("#module4");
el4.addEventListener("mousemove", (e) => {
  el4.style.backgroundPositionX = -e.offsetX + "px";
  el4.style.backgroundPositionY = -e.offsetY + "px";
});
