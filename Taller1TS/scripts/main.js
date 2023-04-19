import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById("series");
var seasonAverageElm = document.getElementById("season-average");
renderSeriesInTable(dataSeries);
seasonAverageElm.innerHTML = '${getSeasonAverage(dataSeries)}';
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>${serie.id}</td><td>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td>";
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonAverage(series) {
    var seasonAverage = 0;
    series.forEach(function (serie) { return seasonAverage = seasonAverage + serie.seasons; });
    seasonAverage = seasonAverage / series.length;
    return seasonAverage;
}
