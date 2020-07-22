// from data.js
var tableData = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

button.on("click", runEnter);

form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);

    var tbody = d3.select("tbody");
    console.log(data);

    data.forEach((alienSighting) => {
        var row = tbody.append("tr");
        Object.values(alienSighting).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
runEnter();