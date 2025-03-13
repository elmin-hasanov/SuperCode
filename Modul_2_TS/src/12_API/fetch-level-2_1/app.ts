type Picsum = {
  author: string;
  download_url: string;
};

const output = document.querySelector(".post-container") as HTMLUListElement;

fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const datenArray = data;
    datenArray.forEach((singleFact: Picsum) => {
      console.log(singleFact.author);
      output.innerHTML += `
      <figure>
      <img src="${singleFact.download_url}">
      <figcaption>${singleFact.author}</figcaption>
      </figure>`;
    });
  })
  .catch((err) => console.log(err));
