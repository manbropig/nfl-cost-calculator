(function () {
  var inputs;

  function sumAllInputs() {
    var result = 0;
    inputs.forEach(function (input) {
      var number = Number(input.value);
      result += number;
    });

    return result;
  }

  function updateDisplay(value) {
    var elem = document.querySelector('#result');
    elem.value = value;
  };

  function init() {
    // collect all of the inputs
    inputs = document.querySelectorAll('.NFLCost__input');

    inputs.forEach(function (input) {
      input.addEventListener('keyup', function (event) {
        var sum = sumAllInputs();
        updateDisplay(sum);
      });
    });
  }

  init();

})();
