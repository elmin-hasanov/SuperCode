type post = {
  userId: number;
  postId: number;
  id: number;
  name: string;
  email: string;
  body: number;
  title: string;
};

const output = document.querySelector(".post-container") as HTMLUListElement;

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const dataArray = data;
//     dataArray.forEach((singleFact: post) => {
//       console.log(singleFact.postId);
//       output.innerHTML += `<p>${singleFact.postId}</p>`;
//       console.log(singleFact.id);
//       output.innerHTML += `<p>${singleFact.id}</p>`;
//       console.log(singleFact.name);
//       output.innerHTML += `<p>${singleFact.name}</p>`;
//       console.log(singleFact.email);
//       output.innerHTML += `<p>${singleFact.email}</p>`;
//       console.log(singleFact.body);
//       output.innerHTML += `<p>${singleFact.body}</p>`;
//     });
//   })
//   .catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const dataArray = data;

    // nur höchste id ausgeben
    const highestID = Math.max(...dataArray.map((o: post) => o.id));

    console.log(highestID);
    output.innerHTML += `<p>${highestID}</p>`;

    // kürzesten Titel ausgeben

    const shortestTitle = dataArray.reduce((prev: post, curr: post) => {
      return prev.title.length < curr.title.length ? prev : curr;
    });

    console.log(shortestTitle.title);

    console.log(shortestTitle);
    output.innerHTML += `<p>${shortestTitle.title}</p>`;

    // längsten Body ausgeben

    const longestBody = dataArray.reduce((prev: post, curr: post) => {
      return prev.body > curr.body ? prev : curr;
    });

    console.log(longestBody);
    output.innerHTML += `<p>${longestBody.body}</p>`;
    console.log(longestBody.body);
  });
