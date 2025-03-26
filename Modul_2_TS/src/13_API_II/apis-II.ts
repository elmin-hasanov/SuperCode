fetch("https://catfact.ninja/facts")
  .then((response) => response.json())
  .then((dataPizzaFunghi) => {
    console.log(dataPizzaFunghi);
    const dataArryFunghi = dataPizzaFunghi.data;
    dataArryFunghi.forEach((singleFact: Fact) => {
      if (output) {
        output.innerHTML += `<li style="margin-bottom: 20px">${singleFact.fact}</li>`;
        output.style.marginBottom = "20px";
      }
    });
  });
