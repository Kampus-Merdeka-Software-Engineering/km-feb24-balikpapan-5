const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "United States",
      "Australia",
      "United Kingdom",
      "Germany",
      "France",
      "Canada",
    ],
    datasets: [
      {
        label: "M",
        data: [4.9, 4, 2, 1.7, 1.6, 1.5],
        // borderWidth: 2,
        backgroundColor: "#00838F",
        // barThickness: 16,
        // categoryPercentage: 9,
        // barPercentage: 3,
      },
      {
        label: "F",
        data: [4.7, 1, 1.9, 1.6, 1.5, 1.3],
        // borderWidth: ,
        backgroundColor: "#4DD0E1",
        // barThickness: 16,
        // categoryPercentage: 9,
        // barPercentage: 3,
      },
    ],
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
  plugins: [ChartDataLabels],
});
