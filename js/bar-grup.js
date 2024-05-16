function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Bikes", "Accessories", "Clothing"],
    ["United States", 5700, 2600, 1400],
    ["United Kingdom", 908.5, 2600, 436.2],
    ["Germany", 744, 2200, 308.2],
    ["France", 668.2, 2100, 333.4],
    ["Canada", 593.2, 1100, 1100],
    ["Australia", 5800, 1300, 692.3],
  ]);

  var options = {
    height: 300,
    // width: 600,
    chartArea: {
      left: 50,
      top: 50,
      width: "80%",
      height: "70%",
    },
    series: {
      0: { color: "#006C80" }, // Bikes
      1: { color: "#0093A7" }, // Accessories
      2: { color: "#00C0CC" }, // Clothing
    },
    bar: { groupWidth: "50%" },
    isStacked: true,
    legend: {
      position: "top",
      alignment: "center",
      textStyle: {
        fontSize: 12,
      },
    },
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("bar-grub")
  );

  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
