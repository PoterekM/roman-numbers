//BizNasty Logic Below
var romanNumNums = function(userInput) {
  var numeralArr = ["I", "V", "X", "L", "C", "D", "M"];

  if (userInput / 1000 >= 1) {
    var thouMult = userInput / 1000;
    var thouSlot = numeralArr[6].repeat(thouMult);

    var userInputHund = userInput.toString().slice(1, userInput.length);
    if (parseInt(userInputHund) / 100 >= 1) {
      var hundMult = parseInt(userInputHund) / 100;
      if (hundMult === 9) {
        var hundSlot = numeralArr[4] + numeralArr[6];
      } else if (hundMult >= 5 && hundMult <= 8) {
        var hundSlotA = hundMult - 5;
        var hundSlot = numeralArr[5] + numeralArr[4].repeat(hundSlotA);
      } else if (hundMult === 4) {
        var hundSlot = numeralArr[4] + numeralArr[5];
      } else {
        var hundSlot = numeralArr[4].repeat(hundMult);
      }
    }
  }
  var resultArr = [thouSlot + hundSlot];
  console.log(resultArr);
  var resultString = resultArr.toString();
  return resultString;

};
//UI Logic Below
$(document).ready(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#num-enter").val());
    var finalResult = romanNumNums(userInput);
    $(".final-result").text(finalResult);
  });
});
