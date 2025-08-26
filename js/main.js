// Function for get elements
function getEl(str) {
  const el = document.querySelector(str);
  return el;
}

function strToNum(el) {
  const num = Number.parseInt(el.textContent);
  return num;
}

const hotlineContainer = getEl("#hotline-container");

function addHeart() {
  const heartEl = getEl("#nav-heart");
  const heartVal = strToNum(heartEl);
  heartEl.textContent = heartVal + 1;
}

hotlineContainer.addEventListener("click", (e) => {
  const target = e.target;
  const heartBtn = target.className.includes("card-heart");
  if (heartBtn) {
    addHeart();
  }
});
