async function getCountriesData(){
    const response = await fetch("tabledata.json")
    const countriesData = await response.json()
    return countriesData
}

async function displayCountriesTable(){
    const countries = await getCountriesData()
    const tbody = document.getElementById("table-data-body");
    countries.forEach(country => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${country.Country}</td>
            <td>${country.Product}</td>
            <td>${country.Profit}</td>
            <td>${country["Item Sold"]}</td>
            <td>${country.Revenue}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayCountriesTable();
});
