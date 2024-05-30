const listEl = document.getElementById("list");

const performances = [
    {bandName: "Foo Fighters", genre: "Rock", performanceTime: "12:00 PM", stage: "Main Stage"},
    {bandName: "Red Hot Chili Peppers", genre: "Rock", performanceTime: "1:30 PM", stage: "Main Stage"},
    {bandName: "Radiohead", genre: "Alternative", performanceTime: "3:00 PM", stage: "Alternative Stage"},
    {bandName: "Arctic Monkeys", genre: "Alternative", performanceTime: "4:30 PM", stage: "Alternative Stage"},
    {bandName: "Kendrick Lamar", genre: "Hip Hop", performanceTime: "6:00 PM", stage: "Main Stage"},
    {bandName: "Drake", genre: "Hip Hop", performanceTime: "7:30 PM", stage: "Main Stage"},
    {bandName: "The Chainsmokers", genre: "Electronic", performanceTime: "9:00 PM", stage: "Dance Stage"},
    {bandName: "Calvin Harris", genre: "Electronic", performanceTime: "10:30 PM", stage: "Dance Stage"},
    {bandName: "Billie Eilish", genre: "Pop", performanceTime: "12:00 AM", stage: "Pop Stage"},
    {bandName: "Taylor Swift", genre: "Pop", performanceTime: "1:30 AM", stage: "Pop Stage"}
];
let favorites = ["Arctic Monkeys", "Billie Eilish"];

function showOnePerformance(performance) {
    return `<div class="col col-sm-6 col-md-3">
                <div class="card p-2 m-1">
                    <strong>${performance.bandName}</strong>
                    ${performance.genre} 
                    <strong>${performance.stage + " " + performance.performanceTime}</strong>
                </div> 
            </div>`;
}


//oefening 1: toon alle eigenschappen van de performances zoals in de screenshot
//oefening 2: filters
//oefening 3: als performance voorkomt in de favorites dan toon je deze in een andere kleur - gebruik de css class favoritePerformance
//oefening 4: als user op een performance klikt die niet in de favorites zit: nieuwe favorites lijst met de performance erbij
// zie TIP voor onclick!!!
//oefening 5: als user op een performance klikt die in de favorites zit: nieuwe favorites lijst zonder deze performance


function showAttractionsInUI() {
    const attractionsHTML = performances
        .map(entry => showOnePerformance(entry))
        .join("");
    listEl.innerHTML = `<div class="row">${attractionsHTML}</div>`;
}

showAttractionsInUI();