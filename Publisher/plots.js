// Trace1 for North America Sales
var trace1 = {
  x: data.map(row => row.game),
  y: data.map(row => row.NA_Sales),
  // text: data.map(row => row.game),
  name: "North America",
  type: "bar"
};

// Trace 2 for Global Sales
var trace2 = {
  x: data.map(row => row.game),
  y: data.map(row => row.Global_Sales),
  // text: data.map(row => row.game),
  name: "Global",
  type: "line"
};

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
  title: "Top 15 Publishers by Sales Data",
  barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
