type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  const meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];

// Auf beatles zugreifen
console.log(meineTopVier[0]);

// auf dem objekt pink floyd auf donwload zugreifen
console.log(meineTopVier[1].formate[3]);

console.log(meineTopVier[1].gold);

console.log(meineTopVier[3].release_jahr, meineTopVier[2].release_jahr);

console.log(meineTopVier[3].formate[2]);

//

const Musik = {
    kunstler: "Eminem",
    title: "8 Mile",
    release_jahr:  2002,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
}

meineTopVier.push(Musik);

console.log(meineTopVier);


// auf Eminem titel zugreifen

console.log(meineTopVier[4].title);
