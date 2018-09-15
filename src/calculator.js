(function () {
  /*
    event listener functions like this one always take an 'event' param
    the event param has a lot of useful data on it like the 'target' object
    which has a value (target.value) property that is the value contained
    in the input
  */
  function direcTvChange(event) {
    // get the value inside the input box
    var direcTvValue = event.target.value;
    // assign it to the display input box
    document.querySelector('#display').value = direcTvValue;
  }

  function init() {
    // grab the direcTv input element as defined in the html with the id='direcTv'
    var directTvInputElement = document.querySelector('#direcTv');
    // add an event listener to it so that the browser knows when to act
    // in this case we pass the `direcTvChange` function (defined above) to the
    // event listener
    directTvInputElement.addEventListener('keyup', direcTvChange);
  }

  init();

})();
// the above function is called an IIFE (immediately invoked function expression)
// It's purpose is to encapsulate all data, variables, functions, EVERYTHING so that
// another js file included in your app later on, does not accidentally call any of the
// variables/functions/etc... defined inside of the IIFE.
// You can think of an IIFE as it's own "sandbox" or it's own universe where other universes won't
// step on it's toes