type Music = {
    artist: string;
    title: string;
    release_year: number;
    medium: string[];
    gold: boolean;
  };
  
  const myTopFour: Music[] = [
    {
      artist: 'The Beatles',
      title: 'Abbey Road',
      release_year: 1969,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      artist: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_year: 1978,
      medium: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_year: 1971,
      medium: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_year: 1983,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];


  //

// 


// output element 

const output = document.getElementById("output") as HTMLDivElement;

// mit forEach durch das Array loopen und die Daten ausgeben
myTopFour.forEach((music) => {
          // if(a.release_year < 1975 ) // BONUS
    output.innerHTML += `
    <div>
        <h2>${music.artist}</h2>
        <p>${music.title}</p>
        <p>${music.medium}</p>
    </div>
    `;
});

// Gib alle Objekte aus, deren “release_year” älter als 1975 ist.

const olderThan1975 = myTopFour.filter((music) => music.release_year > 1975);



