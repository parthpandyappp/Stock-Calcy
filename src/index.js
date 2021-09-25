var res = document.querySelector("#res");

function formHandler() {
  var initial = document.querySelector("#initial-price");

  var quantity = document.querySelector("#quantity");

  var current = document.querySelector("#current-price");

  calculatePAndL(initial, quantity, current);

}


function calculatePAndL(initial, quantity, current) {
  console.log(initial.value)
  console.log(quantity.value)
  console.log(current.value)
  if (Number(initial.value) > Number(current.value)) {
    var loss = (initial.value - current.value) * quantity.value;
    var lossPercentage = Math.abs((loss / initial.value) * 100);

    var textOut = `Loss made on the stock is ${loss} and the percentage is ${lossPercentage}%`;
    res.innerHTML = textOut;
  } else if (Number(current.value) > Number(initial.value)) {
    var profit = Math.abs((current.value - initial.value) * quantity.value);
    var profitPercentage = (profit / initial.value) * 100;
    var textOut = `Profit made on the stock is ${profit} and the percentage is ${profitPercentage}%`;
    res.innerHTML = textOut;


  } else {
    res.innerHTML = "You seem to have a balanced hold";
  }
}
