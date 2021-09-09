var initial = document.querySelector("#initial-price");

var quantity = document.querySelector("#quantity");

var current = document.querySelector("#current-price");

var res = document.querySelector("#res");

function calculate() {
  let Profit = Math.abs(+current.value - +initial.value) * +quantity.value;

  res.innerHTML = "Profit made on the stock is: " + Profit + " Ruppees";
}
