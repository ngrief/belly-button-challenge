# Belly Button Biodiversity Dashboard

An interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. This project visualizes the dataset through dynamic charts and a demographic information panel.

## Features
- **Dropdown Menu**: Select a test subject ID to view their data.
- **Bar Chart**: Displays the top 10 Operational Taxonomic Units (OTUs) for the selected subject.
- **Bubble Chart**: Visualizes all OTUs for the selected subject, with marker size representing sample values and color indicating OTU IDs.
- **Metadata Panel**: Shows demographic information for the selected test subject.

## Project Structure
belly-button-challenge/ ├── static/ │ ├── css/ │ │ └── styles.css # Custom styles for the dashboard │ ├── js/ │ │ └── app.js # Main JavaScript file for interactivity ├── data/ │ └── samples.json # Dataset for development (not used in deployment) ├── index.html # Main HTML file ├── README.md # Project documentation └── .gitignore # File exclusions for Git

bash
Copy code

## How to Run Locally
1. Clone this repository:
   ```bash
   git clone git@github.com:<your-username>/belly-button-challenge.git
   cd belly-button-challenge
Open index.html in your web browser.
Deployment
The project is deployed on GitHub Pages. You can access the live dashboard here:
Belly Button Biodiversity Dashboard

Technologies Used
D3.js: For data fetching and DOM manipulation.
Plotly.js: For rendering bar and bubble charts.
Bootstrap 5: For responsive layout and styling.
Dataset Information
The dataset reveals microbial species (OTUs) found in human navels:

Some species are prevalent in over 70% of individuals.
Most species are relatively rare.
Key data fields include:

otu_ids: Microbial species identifiers.
sample_values: Quantities of each OTU in a sample.
otu_labels: Descriptions of each OTU.
Screenshot

(Optional: Add this if you have a screenshot of your dashboard)

Acknowledgments
This project was completed as part of Module 14 Challenge in the Data Analytics Bootcamp.
Special thanks to the dataset contributors and course instructors.

yaml
Copy code

---

### Steps to Use
1. Copy the entire block above.
2. Open VSCode.
3. Create a new file called `README.md` in the root directory of your project.
4. Paste the content and replace `<your-username>` with your GitHub username.
5. Save the file.

Let me know if you need help with further steps! 🚀









ChatGPT can make mistakes. Check im