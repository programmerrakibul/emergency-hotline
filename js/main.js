// Function for get elements
function getEl(str) {
  const el = document.querySelector(str);
  return el;
}

// Convert an elements inner text into Number
function strToNum(el) {
  const num = Number.parseInt(el.textContent);
  return num;
}

// makes alert
function alertFunc(str) {
  return alert(str);
}

const hotlineContainer = getEl("#hotline-container");
const historyContainer = getEl("#history-container");
const clearBtn = getEl("#clear-btn");

// Calculates an elements inner text with + 1
function addCount(el) {
  const value = strToNum(el);
  el.textContent = value + 1;
}

function reduceCoin() {
  const coinEl = getEl("#nav-coin");
  const coin = strToNum(coinEl);
  if (coin < 20) {
    alertFunc("❌ You have less than 20 coins, you will not be able to call.");
    return false;
  } else {
    coinEl.textContent = coin - 20;
    return true;
  }
}

function makeHistoryCard(title, hotline) {
  const time = new Date().toLocaleTimeString();
  const card = `
            <div
              class="p-4 rounded-lg bg-[#FAFAFA] flex justify-between items-center gap-1.5 shadow-sm shadow-[#00000026]"
            >
              <div>
                <h4>${title}</h4>
                <span class="text-[#5C5C5C]">${hotline}</span>
              </div>
              <span>${time}</span>
            </div>
  `;
  const div = document.createElement("div");
  div.innerHTML = card;

  return div;
}

hotlineContainer.addEventListener("click", (e) => {
  const target = e.target;
  const card = e.target.closest(".card");
  const serviceTitle = card.children[1].children[0].children[0].textContent;
  const hotlineNumber = card.children[1].children[1].children[0].textContent;
  const heartBtn = target.className.includes("card-heart");
  const copyBtn = target.closest(".copy-btn");
  const callBtn = target.closest(".call-btn");
  if (heartBtn) {
    const heartEl = getEl("#nav-heart");
    addCount(heartEl);
  }

  if (copyBtn) {
    const heartEl = getEl("#nav-copy");
    addCount(heartEl);
    alertFunc("✅ Hotline Number Copied");
    navigator.clipboard.writeText(hotlineNumber);
  }
  if (callBtn) {
    const canCall = reduceCoin();
    const callHistoryCard = makeHistoryCard(serviceTitle, hotlineNumber);

    if (canCall) {
      historyContainer.append(callHistoryCard);
      alertFunc(`📞 ${serviceTitle} কে কল করা হচ্ছে। নাম্বার ${hotlineNumber}`);
    }
  }
});

clearBtn.addEventListener("click", () => {
  historyContainer.innerHTML = "";
});
