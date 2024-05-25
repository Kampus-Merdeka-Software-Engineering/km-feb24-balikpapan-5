


const disributionChart = document.getElementById("disributionChart")
let disributionChartCanvas = null;

fetch('./json/GenderDisributionByCountryRevenue.json')
.then((response) => response.json())
.then((response) => {
let datasets = response.datasets[0]
renderGenderDisributionByCountryandRevenue(datasets.labels, datasets.data, datasets.value)
})

const renderGenderDisributionByCountryandRevenue = (labels, data, value) => {
disributionChartCanvas = new Chart(disributionChart, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: data,
        data: value,
        // borderWidth: 2,
        backgroundColor: "#00838F",
        // barThickness: 16,
        // categoryPercentage: 9,
        // barPercentage: 3,
      },
      {
        label: data,
        data: value,
        // borderWidth: ,
        backgroundColor: "#4DD0E1",
        // barThickness: 16,
        // categoryPercentage: 9,
        // barPercentage: 3,
      }
    ]
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
            size: 10, // Adjust the font size here
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
  })
}