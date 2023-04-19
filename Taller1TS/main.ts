import { Serie } from "./serie.js";

import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById("series")!;
const seasonAverageElm: HTMLElement = document.getElementById("season-average")!;

renderSeriesInTable(dataSeries);

seasonAverageElm.innerHTML = '${getSeasonAverage(dataSeries)}'

function renderSeriesInTable(series: Serie[]): void {
    console.log("Desplegando series");
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = "<td>${serie.id}</td><td>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td>";
        seriesTbody.appendChild(trElement);
    });
}

function getSeasonAverage(series: Serie[]): number {
    let seasonAverage: number = 0;
    series.forEach((serie) => seasonAverage = seasonAverage + serie.seasons);
    seasonAverage = seasonAverage/series.length;
    return seasonAverage;
}