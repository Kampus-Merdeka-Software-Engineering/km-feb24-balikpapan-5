const distributionChart = document.getElementById("distributionChart");
let distributionChartCanvas = null;

fetch('./data/GenderDisributionByCountryandRevenue.json')
  .then((response) => response.json())
  .then((responseData) => {

    // convert data to millions
    responseData.datasets.forEach(dataset => {
      dataset.data = dataset.data.map(value => value / 1000000)
    })
    renderGenderDistributionByCountryandRevenue(responseData.labels, responseData.datasets);
  });

const renderGenderDistributionByCountryandRevenue = (labels, datasets) => {
  distributionChartCanvas = new Chart(distributionChart, {
    type: "bar",
    data: {
      labels: labels,
      datasets: datasets

    },
    options: {
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value + " jt";
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: 10,
            },
          },
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.x !== null) {
                label += context.parsed.x + " jt";
              }
              return label;
            },
          },
        },
        datalabels: {
          anchor: "end",
          align: "right",
          formatter: function (data, context) {
            return data + "jt";
          },
          color: "white",
          font: {
            weight: "bold",
            size: 3,
          },
        },
      },
    },
  });
};
