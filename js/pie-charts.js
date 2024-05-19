function drawChart() {
  fetch("../data/ageGroupDistributionData.json")
    .then((response) => response.json())
    .then((res) => {
      const response = res.data;

      let data = new google.visualization.DataTable();
      data.addColumn("string", "Age Group");
      data.addColumn("number", "Percentage");

      for (let i = 0; i < response.length; i++) {
        let label = response[i].label;
        let value = response[i].value;
        data.addRow([label, value]);
      }

      let options = {
        height: 280,
        chartArea: {
          left: 20,
          top: 20,
          width: "90%",
          height: "80%",
        },
        colors: ["#006C80", "#0093A7", "#00C0CC", "#00E5FF"],
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
    });
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
