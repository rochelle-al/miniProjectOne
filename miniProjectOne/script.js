document.write('<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>');
document.write('<script src="https://kit.fontawesome.com/92c65f8129.js" crossorigin="anonymous"></script>');


var ctx1 = document.getElementById('myChart3').getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March'],
    datasets: [{
      label: 'Dataset',
      data: [10, 20, 30, 40],
      backgroundColor: 'rgba(0, 123, 255, 0.7)'
    }]
  },
  options: {
    
  }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March'],
    datasets: [{
      label: 'Dataset',
      data: [30, 40, 50],
      backgroundColor: ['rgba(54, 162, 235, 0.7)'],
    }]
  },
  options: {
    
  }
});

var ctx3 = document.getElementById('myChart1').getContext('2d');
var myChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March'],
    datasets: [{
      label: 'Dataset',
      data: [10, 20, 30, 40],
      backgroundColor: 'rgba(4, 194, 127)',
    }]
  },
  options: {
    borderColor: 'rgba(9, 194, 127)',
  }
});
