//BizNasty Logic Below
var romanNumNums = function(userInput) {
  var numeralArr = ["I", "V", "X", "L", "C", "D", "M"];
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
//numbers NOT divisible by 1000 that ARE divisible by 100:
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
//numbers NOT divisible by 1000 OR 100, that ARE divisible by 10:
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
        } else if (tenMult <= 3 || tenMult >= 2) {
          var tenSlot = numeralArr[2].repeat(tenMult);
        } else if (tenMult === 1) {
          var tenSlot = numeralArr[2];
        } else {
          alert("Error, you fail!")
        }

        console.log("userInputTen equals " + userInputTen)

        var userInputOne=
        userInputTen.toString().slice(1, userInputTen.length);
        if (userInputOne === 0) {
          var oneSlot = "";
        } else if (parseInt(userInputOne) / 1 >= 1) {
          var oneMult = parseInt(userInputOne / 1);
          if (oneMult === 9) {
            var oneSlot = numeralArr[0] + numeralArr[2];
          } else if (oneMult >= 5 && oneMult <=8) {
            var oneSlotA = oneMult - 5;
            var oneSlot = numeralArr[1] + numeralArr[0].repeat(oneSlotA);
          } else if (oneMult === 4) {
            var oneSlot = numeralArr[0] + numeralArr[1];
          } else if (oneMult >= 2 || oneMult <= 3) {
            var oneSlot = numeralArr[0].repeat(oneMult);
          } else if (oneMult === 1) {
            var oneSlot = numeralArr[0];
          } else if (oneMult === 0) {
            var oneSlot = "";
          } else {
            alert("Error, you fail!")
          }
        }
      } else {
//numbers that are NOT divisible by 1000, 100, or 10. They are divisible by 1
    thouSlot = "";
    hundSlot = "";
    tenSlot = "";

        var userInputOne = userInput;
        if (parseInt(userInputOne) / 1 >= 1) {
          var oneMult = parseInt(userInputOne / 1);
          if (oneMult === 9) {
            var oneSlot = numeralArr[0] + numeralArr[2];
          } else if (oneMult >= 5 && oneMult <=8) {
            var oneSlotA = oneMult - 5;
            var oneSlot = numeralArr[1] + numeralArr[0].repeat(oneSlotA);
          } else if (oneMult === 4) {
            var oneSlot = numeralArr[0] + numeralArr[1];
          } else if (oneMult >= 2 || oneMult <= 3) {
            var oneSlot = numeralArr[0].repeat(oneMult);
          } else if (oneMult === 0) {
            alert("There is no roman numeral for zero, dummy");
          }
        }
      } //closes single digits
    }
  }

  var resultArr = [thouSlot, hundSlot, tenSlot, oneSlot];

  for (var i = 0; i < resultArr.length; i += 1) {
    if (resultArr[i] === undefined) {
      resultArr[i] = "";
    }
  };
  var finalArr = resultArr.join(",");
  console.log(finalArr);
  var resultString = finalArr.toString();
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
