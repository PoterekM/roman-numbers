//BizNasty Logic Below
var romanNumNums = function(userInput) {
  var numeralArr = ["I", "V", "X", "L", "C", "D", "M"];
console.log(userInput);
  if (userInput / 1000 >= 1) {
//numbers divisible by 1000:
    var thouMult = parseInt(userInput / 1000);
    var thouSlot = numeralArr[6].repeat(thouMult);

    var userInputHund = userInput.toString().slice(1, userInput.length);
    if (parseInt(userInputHund) / 100 >= 1) {
      var hundMult = parseInt(userInputHund / 100);
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

      var userInputTen=
      userInputHund.slice(1, userInputHund.length);
      if (parseInt(userInputTen) / 10 >= 1) {
        var tenMult = parseInt(userInputTen / 10);
        if (tenMult === 9) {
          var tenSlot = numeralArr[2] + numeralArr[4];
        } else if (tenMult >= 5 && tenMult <= 8) {
          var tenSlotA = tenMult - 5;
          var tenSlot = numeralArr[3] + numeralArr[2].repeat(tenSlotA);
        } else if (tenMult === 4) {
          var tenSlot = numeralArr[2] + numeralArr[3];
        } else {
          var tenSlot = numeralArr[2].repeat(tenMult);
        }

        var userInputOne=
        userInputTen.slice(1, userInputTen.length);
        if (parseInt(userInputOne) / 1 >= 1) {
          var oneMult = parseInt(userInputOne / 1);
          if (oneMult === 9) {
            var oneSlot = numeralArr[0] + numeralArr[2];
          } else if (oneMult >= 5 && oneMult <=8) {
            var oneSlotA = oneMult - 5;
            var oneSlot = numeralArr[1] + numeralArr[0].repeat(oneSlotA);
          } else if (oneMult === 4) {
            var oneSlot = numeralArr[0] + numeralArr[1];
          } else {
            var oneSlot = numeralArr[0].repeat(oneMult);
          }
        }
      }
    }
  } else {
//numbers NOT divisible by 1000:
    var thouSlot = "";

    var userInputHund = userInput;
    if (parseInt(userInputHund) / 100 >= 1) {
      var hundMult = parseInt(userInputHund / 100);
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

      var userInputTen=
      userInputHund.toString().slice(1, userInputHund.length);
      if (parseInt(userInputTen) / 10 >= 1) {
        var tenMult = parseInt(userInputTen / 10);
        if (tenMult === 9) {
          var tenSlot = numeralArr[2] + numeralArr[4];
        } else if (tenMult >= 5 && tenMult <= 8) {
          var tenSlotA = tenMult - 5;
          var tenSlot = numeralArr[3] + numeralArr[2].repeat(tenSlotA);
        } else if (tenMult === 4) {
          var tenSlot = numeralArr[2] + numeralArr[3];
        } else {
          var tenSlot = numeralArr[2].repeat(tenMult);
        }

        var userInputOne=
        userInputTen.slice(1, userInputTen.length);
        if (parseInt(userInputOne) / 1 >= 1) {
          var oneMult = parseInt(userInputOne / 1);
          if (oneMult === 9) {
            var oneSlot = numeralArr[0] + numeralArr[2];
          } else if (oneMult >= 5 && oneMult <=8) {
            var oneSlotA = oneMult - 5;
            var oneSlot = numeralArr[1] + numeralArr[0].repeat(oneSlotA);
          } else if (oneMult === 4) {
            var oneSlot = numeralArr[0] + numeralArr[1];
          } else {
            var oneSlot = numeralArr[0].repeat(oneMult);
          }
        }
      }
    } else {
      thouSlot = "";
      hundSlot = "";

      var userInputTen = userInput;
      if (parseInt(userInputTen) / 10 >= 1) {
        var tenMult = parseInt(userInputTen / 10);
        if (tenMult === 9) {
          var tenSlot = numeralArr[2] + numeralArr[4];
        } else if (tenMult >= 5 && tenMult <= 8) {
          var tenSlotA = tenMult - 5;
          var tenSlot = numeralArr[3] + numeralArr[2].repeat(tenSlotA);
        } else if (tenMult === 4) {
          var tenSlot = numeralArr[2] + numeralArr[3];
        } else {
          var tenSlot = numeralArr[2].repeat(tenMult);
        }

        var userInputOne=
        userInputTen.toString().slice(1, userInputTen.length);
        if (parseInt(userInputOne) / 1 >= 1) {
          var oneMult = parseInt(userInputOne / 1);
          if (oneMult === 9) {
            var oneSlot = numeralArr[0] + numeralArr[2];
          } else if (oneMult >= 5 && oneMult <=8) {
            var oneSlotA = oneMult - 5;
            var oneSlot = numeralArr[1] + numeralArr[0].repeat(oneSlotA);
          } else if (oneMult === 4) {
            var oneSlot = numeralArr[0] + numeralArr[1];
          } else {
            var oneSlot = numeralArr[0].repeat(oneMult);
          }
        }
      }
    }
  }

  var resultArr = [thouSlot + "-" + hundSlot + "-" + tenSlot + "-" + oneSlot];
  // console.log("thouMult = " + thouMult);
  // console.log("hundMult = " + hundMult);
  // console.log("tenMult = " + tenMult);
  // console.log("oneMult = " + oneMult);
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
