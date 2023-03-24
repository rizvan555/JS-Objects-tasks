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

let body = document.querySelector("body");
let myList = document.createElement("ul");
body.appendChild(myList);
let oldMusicContainer = document.createElement("ul");
body.appendChild(oldMusicContainer);

myMusic.forEach((music) => {
  let artist = music.kunstler;
  let title = music.title;
  let medium = music.formate;
  let li = document.createElement("li");
  myList.appendChild(li);
  li.innerHTML = `<br>${artist}<br>${title}<br>${medium}`;

  if (music.release_jahr < 1975) {
    let oldMusic = document.createElement("li");
    oldMusicContainer.appendChild(oldMusic);
    oldMusic.innerHTML = `<br><br>OLD MUSIC : ${artist} ${title} ${medium}`;
  }
});
