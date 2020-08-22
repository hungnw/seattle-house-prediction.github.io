// Create an array of each country's numbers
var NA_Sales = Object.values(data.NA_Sales);
var EU_Sales = Object.values(data.EU_Sales);
var JP_Sales = Object.values(data.JP_Sales);
var Other_Sales = Object.values(data.Other_Sales);
var Global_Sales = Object.values(data.Global_Sales);

// Create an array of music provider labels
var labels = Object.keys(data.NA_Sales);

// Display the default plot
function init() {
  var data = [{
    values: NA_Sales,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'NA_Sales') {
      data = NA_Sales;
  }
  else if (dataset == 'EU_Sales') {
      data = EU_Sales;
  }
  else if (dataset == 'JP_Sales') {
      data = JP_Sales;
  }
  else if (dataset == 'Other_Sales') {
      data = EU_Sales;
  }
  else if (dataset == 'Global_Sales') {
      data = JP_Sales;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
