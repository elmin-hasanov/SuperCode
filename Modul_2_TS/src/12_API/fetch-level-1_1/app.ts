const output = document.querySelector(".picsum-container") as HTMLUListElement;

type Fact = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((dataPizza) => {
    console.log(dataPizza);
    const dataArray = dataPizza;
    dataArray.forEach((singleFact: Fact) => {
      console.log(singleFact.id);
      output.innerHTML += `<p>${singleFact.id}</p>`;
      console.log(singleFact.author);
      output.innerHTML += `<p>${singleFact.author}</p>`;
      console.log(singleFact.width);
      output.innerHTML += `<p>${singleFact.width}</p>`;
      console.log(singleFact.height);
      output.innerHTML += `<p>${singleFact.height}</p>`;
      console.log(singleFact.url);
      output.innerHTML += `<div><a href="${singleFact.url}">${singleFact.url}</a></div>`;
      console.log(singleFact.download_url);
      output.innerHTML += `<a href="${singleFact.download_url}">${singleFact.download_url}</a>`;
    });
  })
  .catch((err) => console.log(err));
