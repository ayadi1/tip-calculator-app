var bill = document.getElementById("bill");
var peopleNumber = document.getElementById("peopleNumber");
var tipPrice = document.getElementById("tipPrice");
var totalParPerson = document.getElementById("totalParPerson");
const zeroMessage = document.getElementById("zeroMessage");
const customTip = document.getElementById("customTip");
var tipMount = 5;
var tip = document.querySelector(".list");
tip.addEventListener("click", (e) => {
  e.target.parentElement.childNodes.forEach((element) => {
    console.log(element.classList);
    if (element.classList) {
      console.log(e.target);
      element.classList.remove("optionSelected");
      element.classList.add("option");
      if (e.target.firstChild) {
        tipMount = e.target.firstChild.data.substring(
          0,
          e.target.firstChild.data.length - 1
        );
      }
    }
  });
  e.target.classList.remove("option");
  e.target.classList.add("optionSelected");
  calcTipAndTotalAmount(bill.value, tipMount, peopleNumber.value);
});

peopleNumber.addEventListener("change", () => {
  calcTipAndTotalAmount(bill.value, tipMount, peopleNumber.value);
});

const calcTipAndTotalAmount = (bill, tip, poeple) => {
  if (poeple != 0) {
    let tipFinel = ((bill * tip) / 100 / poeple).toFixed(2);
    let totalFinel = ((Number(bill) + Number(tipFinel)) / poeple).toFixed(2);
    tipPrice.textContent = tipFinel;
    totalParPerson.textContent = totalFinel;
    zeroMessage.style.display = "none";
  } else {
    zeroMessage.style.display = "block";
  }
};

customTip.addEventListener("input", () => {
  calcTipAndTotalAmount(bill.value, customTip.value, peopleNumber.value);
});
customTip.addEventListener("click", () => {
  calcTipAndTotalAmount(bill.value, customTip.value, peopleNumber.value);
});
