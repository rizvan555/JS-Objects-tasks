let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" },
];

let namesMetalArr = [];
let gramEuroArr = [];
let veranderungArr = [];

edelMetallPreise.forEach((edelMetal) => {
  namesMetalArr.push(edelMetal.name);
});
let mapMetal = edelMetallPreise.map((edelMetal) => {
  return edelMetal.name;
});

edelMetallPreise.forEach((edelMetal) => {
  gramEuroArr.push(edelMetal.preiseGramEuro);
});
let mapGramEuro = edelMetallPreise.map((edelMetal) => {
  return edelMetal.preiseGramEuro;
});

edelMetallPreise.forEach((edelMetal) => {
  veranderungArr.push(edelMetal.veranderung);
});
let mapVeranderung = edelMetallPreise.map((edelMetal) => {
  return edelMetal.veranderung;
});

edelMetallPreise.filter((edelMetal) => {
  return edelMetal.preiseGramEuro > 50;
});

let table =
  "<table><tr><th>Name</th><th>Preis (€/g)</th><th>Veränderung</th></tr>";

edelMetallPreise.forEach((edelMetal) => {
  table +=
    "<tr><td>" +
    edelMetal.name +
    "</td><td>" +
    edelMetal.preiseGramEuro +
    "</td><td>" +
    edelMetal.veranderung +
    "</td></tr>";
});

table += "</table>";

document.body.innerHTML = table;
