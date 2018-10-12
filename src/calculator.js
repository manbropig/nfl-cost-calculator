(function () {
  let inputs;
  let barEnter;
  const direcTVCalc = (value) => Number(value) * 500;
  const nationalTvCalc = (value) => Number(value) * 60;
  const barPatronageCalc = (value) => Number(value) * 100;
  const merchandiseCalc = (value) => Number(value) * 150;
  const ticketSalesCalc = (value) => Number(value) * 180;

  // This map uses input.id's as the key and maps to calc fns and result destinations
  const calculationsMap = {
    direcTV: { calcFn: direcTVCalc, targetId: 'direcTVResult' },
    nationalTv: { calcFn: nationalTvCalc, targetId: 'nationalTvResult' },
    barPatronage: { calcFn: barPatronageCalc, targetId: 'barPatronageResult' },
    merchandise: { calcFn: merchandiseCalc, targetId: 'merchandiseResult' },
    ticketSales: { calcFn: ticketSalesCalc, targetId: 'ticketSalesResult' }
  };

  const calculateAllInputs = () => {
    const data = [];
    let sum = 0;
    inputs.forEach((input) => {
      var calculationObj = calculationsMap[input.id];
      var result = calculationObj.calcFn(input.value);
      var destination = document.querySelector('#' + calculationObj.targetId);
      data.push(result);
      sum += result;
      // this is a ternary: meaning if the first expression after the "=" is "truthy"
      // the first value after the "?" is assigned, otherwise the value after the ":"
      // is assigned
      destination.innerHTML = result === 0 ? '' : result;
    });

    return { sum, data };
  };

  function updateDisplay(value) {
    document.querySelector('#result').innerHTML = value;
  };

  const updateChart = (data) => {
    const chart = d3.select('.barChart');
    const bar = chart.selectAll('div');
    const barUpdate = bar.data(data);
    if (!barEnter) {
      barEnter = barUpdate.enter().append('div');
    }

    barEnter.style('width', (d) => `${d / 10}px`);
    barEnter.attr('class', 'barChartBar');
    barEnter.text(d => `$${d}`);
  }

  function init() {
    // collect all of the inputs
    inputs = document.querySelectorAll('.NFLCost__input');

    inputs.forEach(function (input) {
      input.addEventListener('keyup', function (event) {
        const { sum, data } = calculateAllInputs();
        updateDisplay(sum);
        updateChart(data);
      });
    });
  }

  init();

})();
