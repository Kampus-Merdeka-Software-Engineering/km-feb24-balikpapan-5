fetch("../data/tabledata.json")
.then((resp) => resp.json())
.then((dataTable) => {

new DataTable('#data-table', {
    columns: [
        { title: 'Country' },
        { title: 'Product' },
        { title: 'Profit' },
        { title: 'Item Sold' },
        { title: 'Revenue' },
    ],
    data: dataTable
});
})