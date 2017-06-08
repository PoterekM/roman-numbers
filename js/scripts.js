//BizNasty Logic Below
var romanNumNums = function(userInput) {
  var numeralArr = ["I", "V", "X", "L", "C", "D", "M"];
  var resultArr = [];

  if (userInput / 1000 >= 1) {
    var thouMult = userInput / 1000;
    var thouSlot = numeralArr[6].repeat(thouMult);
    resultArr.push(thouSlot);
  }

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
