function bigImg(x) {
  x.style.height = "5vw";
  x.style.width = "5vw";
}

function normalImg(x) {
  x.style.backgroundColor = "transparent";
  setTimeout(() => { x.style.backgroundColor = "#FFB8A2"; }, 1000);
}
