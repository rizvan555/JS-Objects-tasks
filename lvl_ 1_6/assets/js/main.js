let myMusic = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

myMusic.push({
  kunstler: "Rashid Behbudov",
  title: "Nezende Sevgilim",
  release_jahr: 1960,
  formate: ["LP", "CD", "MC", "Download"],
  gold: true,
});
console.log(myMusic);

console.log(myMusic[0].kunstler);
console.log(myMusic[1].formate[3]);
console.log(myMusic[1].gold);
console.log(myMusic[2].release_jahr, myMusic[3].release_jahr);
console.log(myMusic[3].formate[2]);
console.log(myMusic[3].title.split(" ")[4]);
console.log(myMusic[2].title.split(" ")[2]);
console.log(myMusic[1].kunstler.split(" ")[1]);
