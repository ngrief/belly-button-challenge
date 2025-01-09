// File: static/js/app.js

// Initialize the dashboard
function init() {
  // Fetch the data from the JSON file
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Populate the dropdown menu with sample IDs
    const sampleNames = data.names;
    const selector = d3.select("#selDataset");

    sampleNames.forEach((sample) => {
      selector.append("option").text(sample).property("value", sample);
    });

    // Use the first sample to build the initial plots and metadata
    const firstSample = sampleNames[0];
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Fetch and display metadata for the selected sample
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const metadata = data.metadata;
    const result = metadata.filter((meta) => meta.id == sample)[0];
    const panel = d3.select("#sample-metadata");

    // Clear existing metadata
    panel.html("");

    // Add each key-value pair to the panel
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// Build the bar and bubble charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const samples = data.samples;
    const result = samples.filter((s) => s.id == sample)[0];

    const { otu_ids, otu_labels, sample_values } = result;

    // Bar Chart
    const barData = [{
      x: sample_values.slice(0, 10).reverse(),
      y: otu_ids.slice(0, 10).map((id) => `OTU ${id}`).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h",
    }];

    const barLayout = {
      title: "Top 10 OTUs Found",
      margin: { t: 30, l: 150 },
    };

    Plotly.newPlot("bar", barData, barLayout);

    // Bubble Chart
    const bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth",
      },
    }];

    const bubbleLayout = {
      title: "OTU Samples",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" },
      margin: { t: 50 },
    };

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}

// Update charts and metadata when a new sample is selected
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Start the dashboard
init();
