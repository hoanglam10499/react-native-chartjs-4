<html>
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://polyfill.io/v3/polyfill.js?version=3.111.0"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div>
    <canvas id="myChart" style="height: 200px; width: 100px"></canvas>
  </div>
  <script type="module">
    try {
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["HELO"],
          datasets: [
            {
              label: 'Fully Rounded',
              data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
              borderColor: "red",
              backgroundColor: "blue",
              borderWidth: 2,
              borderRadius: 6,
              borderSkipped: false,
            },
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Bar Chart'
            }
          }
        },
      })
    } catch (error) {
      alert(JSON.stringify(error.message))
    }
  </script>
</body>
</html>
