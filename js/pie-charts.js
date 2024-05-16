function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Age Group", "Percentage"],
    ["Adults (35-64)", 49.8],
    ["Young Adults (25-34)", 35.9],
    ["Youth (<25)", 13.9],
    ["Seniors (64+)", 0.4], // Adding a value for seniors to match the legend in the provided image
  ]);

  var options = {
    height: 280,
    // width: 200,
    chartArea: {
      left: 20,
      top: 20,
      width: "90%",
      height: "80%",
    },
    colors: ["#006C80", "#0093A7", "#00C0CC", "#00E5FF"], // Updated colors to match the image
    legend: {
      position: "bottom",
      alignment: "center",

      textStyle: {
        fontSize: 12,
      },
    },
    pieSliceText: "percentage",
    pieSliceTextStyle: {
      color: "black",
    },
    tooltip: {
      text: "percentage",
    },
    backgroundColor: "none",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("pie-chart")
  );

  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
