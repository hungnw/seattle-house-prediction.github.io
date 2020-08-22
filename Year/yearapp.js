const vgData = "yeardata.json"
Dataset = d3.json(vgData)

function optionChanged(value){  

    var sample = samples.filter(name => (name.id==value))[0];    
    var sampSales = sample["sales"];
    var labeled_sampSales = sampSales;
    var sampSample_values = sample["sample_values"]; 
    labeled_sampSales = labeled_sampSales.map(x=>x);

//bar plot
    var chartData = [{
        x: labeled_sampSales,
        y: sampSample_values,
        type: "bar",        
    }];
    Plotly.newPlot("bar",chartData);     

}

var year = [];
var samples = [];

// call menu
var menu = d3.select("#selDataset").selectAll("option");

function init(){
    Dataset.then(function(data){
        
        year = data.year;
        samples = data.samples;

        // create menu
        menu.data(year)
            .enter()
            .append("option")                
            .html(function(name){return name});
    });
};

init();




