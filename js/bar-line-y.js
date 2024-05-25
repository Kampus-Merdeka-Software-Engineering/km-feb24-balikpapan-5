const distributionChart = document.getElementById("distributionChart");
let distributionChartCanvas = null;

fetch('./data/GenderDisributionByCountryandRevenue.json')
  .then((response) => response.json())
  .then((responseData) => {
    const datasets = responseData.datasets[0];
    renderGenderDistributionByCountryAndRevenue(datasets.labels, datasets.data, datasets.value);
  });

const renderGenderDistributionByCountryAndRevenue = (labels, data, value) => {
  distributionChartCanvas = new Chart(distributionChart, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Male",
          data: data,
          backgroundColor: "#00838F",
        },
        {
          label: "Female",
          data: value,
          backgroundColor: "#4DD0E1",
        }
      ]
    },
    options: {
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
          formatter: function (value, context) {
            return value + " jt";
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
