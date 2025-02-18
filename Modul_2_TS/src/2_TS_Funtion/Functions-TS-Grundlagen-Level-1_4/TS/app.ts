
// hier schreibe ich eine funktion auf mit 3 parametern 

function showHero(heroName: string, heroPower: string, heroEnemy: string) {
    
// hier deklariere ich die parametern mit variablen
    
    const nameOutput: string = `Mein Lieblinheld ist ${heroName}`
    const powerOutput: string = `Er hat die Fähigkeit ${heroPower}`
    const enemyOutput: string = `Sein größte Gegner ist ${heroEnemy}`

// hier wird es ausgegen also die variablen

    console.log(nameOutput + powerOutput + enemyOutput);
    
}

// hier führe ich die Funktion also erste ist Parameter heroName also schreibe ich zb. Hero Spiderman
showHero('Spiderman', 'Kletern Springen' , 'Green Goblin')