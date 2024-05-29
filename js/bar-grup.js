document.addEventListener('DOMContentLoaded', function () {
  fetch('./data/SalesByproductCatandCountry.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          createStackedBarChart(data);
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
});

function createStackedBarChart(data) {
  // Mengelompokkan data berdasarkan negara
  const groupedData = data.reduce((acc, cur) => {
      const key = cur.Country;
      if (!acc[key]) {
          acc[key] = {};
      }
      acc[key][cur.Product_Category] = cur.Revenue;
      return acc;
  }, {});


   // Membuat array labels dan datasets untuk chart
  const countries = Object.keys(groupedData);
  const categories = Object.keys(data.reduce((acc, cur) => { acc[cur.Product_Category] = true; return acc; }, {}));



  // Menetapkan warna untuk setiap kategori
  const categoryColors = {
      "Bikes": "#006C80",
      "Accessories": "#0093A7",
      "Clothing": "#00C0CC"
  };

  const datasets = categories.map(category => {
      return {
          label: category,
          data: countries.map(country => groupedData[country][category] || 0),
          backgroundColor: categoryColors[category] || 'rgba(0, 0, 0, 0.1)', // Warna default jika kategori tidak ditemukan
          stack: 'Stack 1'
      };
  });

  // Membuat stacked bar chart menggunakan Chart.js
  const ctx = document.getElementById('salesChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: countries,
          datasets: datasets
      },
      options: {
          scales: {
              x: { stacked: true },
              y: {
                  stacked: true,
                  ticks: {
                      callback: function(value, index, values) {
                          if (value >= 1000000) {
                              return (value / 1000000) + 'M';
                          } else if (value >= 1000) {
                              return (value / 1000) + 'K';
                          }
                          return value;
                      }
                  }
              }
          }
      }
  });
}
