var cutPizzaSlices = function (slices) {
  var Pieces = function (people) {
    console.log(`each person gets ${slices / people} slices of people`);
  }
  return Pieces

}
var sharePizza = cutPizzaSlices(8);
//sharePizza is = pieces
(sharePizza(2));
sharePizza(3);
// cutPizzaSlices(8)(4)
