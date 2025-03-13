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
      output.innerHTML += `<div><div><img src="${singleFact.download_url}" alt="${singleFact.author}"></div><div><p>${singleFact.author}</p></div></div>`;
    });
  })
  .catch((err) => console.log(err));
