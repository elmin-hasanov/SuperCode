enum ClothingColors {
    Gelb = "#ffff00",
    Orange = "#ff6347",
    Pink = "#ffc0cb",
    Blau = "#3535ec",
    Lila = "#5a0d5a",
    Grau = "#9e9d9d",
  }
  
  const allColors: ClothingColors[] = [
    ClothingColors.Gelb,
    ClothingColors.Orange,
    ClothingColors.Pink,
    ClothingColors.Blau,
    ClothingColors.Lila,
    ClothingColors.Grau,
  ];
  
  console.log(allColors);
  
  const output = document.querySelector("div");
  
  if (output) {
    allColors.forEach((hexColor) => {
      output.innerHTML += `<button style="background-color: ${hexColor}">${hexColor}</button>`;
    });
  }
  
  //mit Object Keys
  for (let i = 0; i < Object.keys(ClothingColors).length; i++) {
    if (output) {
      output.innerHTML += `<button style="background-color:${
        Object.values(ClothingColors)[i]
      }">${Object.keys(ClothingColors)[i]}</button>`;
    }
  }