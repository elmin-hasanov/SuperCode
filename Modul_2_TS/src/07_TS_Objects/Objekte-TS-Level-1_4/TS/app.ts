type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  const unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
  ];

    console.log(unsereHaustiere);

    // nala und droopy
    console.log(unsereHaustiere[0].namen[1]);
    console.log(unsereHaustiere[1].namen[2]);

    // droopy in Snoopy umbenennen
    // Dinky in Pinky umbenennen
    unsereHaustiere[1].namen[2] = 'Snoopy';
    unsereHaustiere[0].namen[2] = 'Pinky';
    console.log(unsereHaustiere);

    // weiteres objekt im array hinzufügen
    unsereHaustiere.push({
        tiertyp: 'Hamster',
        namen: ['Piep', 'Kuku', 'Pups']
    });
    console.log(unsereHaustiere);
