const filteringByAge = document.getElementById("checkboxes");
const labelFiltering = filteringByAge.querySelectorAll(
  "input[type='checkbox']"
);
let filteringByAgeChecked = [];
for (let i = 0; i < labelFiltering.length; i++) {
  labelFiltering[i].addEventListener("change", () => {
    if (labelFiltering[i].checked) {
      filteringByAgeChecked.push(labelFiltering[i].value);
    } else {
      const index = filteringByAgeChecked.indexOf(labelFiltering[i].value);
      if (index > -1) {
        filteringByAgeChecked.splice(index, 1);
      }
    }

    // recall the drawchart everytime user doing filtering
    google.charts.setOnLoadCallback(drawChart);
  });
}

function drawChart() {
  fetch("../data/ageGroupDistributionData.json")
    .then((response) => response.json())
    .then((res) => {
      const response = res.data;

      let data = new google.visualization.DataTable();
      data.addColumn("string", "Age Group");
      data.addColumn("number", "Percentage");

      if (filteringByAgeChecked.length == 0) {
        for (let i = 0; i < response.length; i++) {
          let label = response[i].label;
          let value = response[i].value;
          data.addRow([label, value]);
        }
      } else {
        const filteredData = response.filter((item) =>
          filteringByAgeChecked.includes(item.label)
        );

        filteredData.forEach((item) => {
          data.addRow([item.label, item.value]);
        });
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
            fontSize: 6, //can customized
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
