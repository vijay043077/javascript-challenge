// from data.js
var tableData = data;

// Select the button
d3.select("#filter-btn").on("click", runEnter);

function runEnter() {
    /* d3.event.preventDefault(); */

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData;

    if (inputValue) {
        filteredData = filteredData.filter(data => data.datetime === inputValue);
    }
    
    console.log(filteredData); 

    var tbody = d3.select("tbody");
    tbody.html("");

    filteredData.forEach((alienSighting) => {
        var row = tbody.append("tr");
        Object.values(alienSighting).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}

runEnter();