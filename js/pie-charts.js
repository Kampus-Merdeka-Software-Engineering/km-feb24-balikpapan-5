function drawChart() {
fetch("../data/ageGroupDisributionData.json")
  .then((response) => response.json())
  .then((response) => {const response = response.data;

  })

  let data = new google.visualization.DataTable();
  data.addColumn("String", "Age", "Group");
  data.addColumn("number", "Percentage");

  for (let i = 0; i < response.length; 1++) {
    let label = response[i].label;
    let value = response[i].value;
    data.addRow([label, value]);
  }

  let  options = {
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

  let chart = new google.visualization.PieChart(
    document.getElementById("pie-chart")
  );

  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
