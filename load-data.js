//load the google charts
google.charts.load('current', { 'packages': ['corechart'] });

//load the Callback function that runs when page loads
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
    drawSheetName('data-breach', 'SELECT E,K',
        TypeOfBreachYear);
    drawSheetName('data-breach', 'SELECT L,M,G',
        BubbleChartlonglat);
   
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler) {
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1C8casRNrMUWz_olWyKxfkO3ptWbr_EmaRi7mNugGHqo/gviz/tq?sheet='
        + sheetName + '&headers=1&tq=' + queryString);
    query.send(responseHandler);
} //drawSheetName

function checkError(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() +
            ' ' + response.getDetailedMessage());
        return;
    }
}
//Function end


function TypeOfBreachYear(response) {
    checkError(response);
    var data = response.getDataTable();
    
    var options = {
        title: 'Age vs. Weight comparison',
        hAxis: {title: 'Type of breach'},
        vAxis: {title: 'Year of Breach'},
        legend: 'none',
        width: 650,
        height: 500,
 
    };

    var chart = new google.visualization.ScatterChart(
        document.getElementById('breachbyyear'));
    chart.draw(data, options);
} //Column chart



function BubbleChartlonglat(response) {
    checkError(response);
    var data = response.getDataTable();
    
    var options = {
        title: "longitude latitude records hacked",
        hAxis: {title: 'longitude'},
        vAxis: {title: 'latitude'},
        colorAxis: {colors: ['yellow', 'red']} ,
        width: 750,
        height: 600,
    };

    var chart = new google.visualization.ScatterChart(
        document.getElementById('bubblelong'));
    chart.draw(data, options);
} //Column chart

