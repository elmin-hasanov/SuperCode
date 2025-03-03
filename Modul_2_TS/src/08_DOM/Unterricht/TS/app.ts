//# DOM
//# createElement()
//-> wir koennen damit in TS ein HTLM-Element erstellen und alle gewunschten Eigenschaften setzen

//# appendChild()
//-> wir fuegen damit das erstellte Elt einem anderen Elt des DOM hinzu (als Kind)

//# append()
//-> wir fuegen damit erstellte Elemente einem anderen Elt des DOM hinzu

type shopItem = {
    productName: string;
    price: number;
    description: string;
    imgUrl: string;
    stock: number;
  };
  
  const shopItemsArr: shopItem[] = [
    {
      productName: "T-Shirt",
      price: 19.99,
      description: "Baumwoll-T-Shirt in verschiedenen Farben",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 50,
    },
    {
      productName: "Jeans",
      price: 49.99,
      description: "Slim-Fit-Jeans aus Denim",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 30,
    },
    {
      productName: "Sneakers",
      price: 79.99,
      description: "Bequeme Sneakers für den Alltag",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 20,
    },
    {
      productName: "Hoodie",
      price: 39.99,
      description: "Warmer Hoodie für kalte Tage",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 40,
    },
    {
      productName: "Jacke",
      price: 99.99,
      description: "Wind- und wasserabweisende Jacke",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 15,
    },
    {
      productName: "Hose",
      price: 29.99,
      description: "Leichte Stoffhose für den Sommer",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 60,
    },
    {
      productName: "Socken",
      price: 9.99,
      description: "Bequeme Socken aus Baumwolle",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 100,
    },
    {
      productName: "Mütze",
      price: 14.99,
      description: "Warme Mütze für den Winter",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 25,
    },
    {
      productName: "Schal",
      price: 24.99,
      description: "Weicher Schal aus Wolle",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 35,
    },
    {
      productName: "Handschuhe",
      price: 19.99,
      description: "Warme Handschuhe aus Leder",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 10,
    },
  ];
  
  // console.log(shopItemsArr);
  
  const shopContainer = document.querySelector(".products");
  const sortAscBtn = document.querySelector(".price-asc");
  const sortDescBtn = document.querySelector(".price-desc");
  const searchBtn = document.querySelector(".search-ptn");
  const userSearchinput = document.querySelector("input")

  
  function renderProducts(products: shopItem[]) {
    if (shopContainer) shopContainer.innerHTML = "";
  
    products.forEach((singleShopItem) => {
      //console.log(singleShopItem);
      const productCard = document.createElement("div");
      productCard.classList.add("shop-item");
  
      const title = document.createElement("h2");
      title.innerText = singleShopItem.productName;
  
      const price = document.createElement("h4");
      price.innerText = `${singleShopItem.price} Euro`;
      //price.hidden = true;
      //price.style.backgroundColor = "green";
  
      const description = document.createElement("p");
      description.innerText = singleShopItem.description;
  
      const image = document.createElement("img");
      image.src = singleShopItem.imgUrl;
      image.alt = singleShopItem.productName;
  
      const stock = document.createElement("p");
      stock.innerText = `${singleShopItem.stock.toString()} auf Lager`;
  
      productCard.append(image, title, stock, price, description);
  
      if (shopContainer) {
        shopContainer.appendChild(productCard);
      }
    });
  }
  
  renderProducts(shopItemsArr);
  
  //Eventlistener auf die Btns
  sortAscBtn?.addEventListener("click", sortPriceAscending);
  sortDescBtn?.addEventListener("click", sortPriceDescending);
  searchBtn?.addEventListener("click", () => filterProducts(userSearchinput? userSearchinput.value : "")
);
  

  function sortPriceAscending() {
    console.log("ich wurde geklickt");
    const sortedProducts = [...shopItemsArr];
    sortedProducts.sort((a, b) => a.price - b.price);
    console.log(sortedProducts);
    renderProducts(sortedProducts);
  }
  
  function sortPriceDescending() {
    console.log("ich wurde geklickt");
    const sortedProducts = [...shopItemsArr];
    sortedProducts.sort((a, b) => b.price - a.price);
    console.log(sortedProducts);
    renderProducts(sortedProducts);
  }

function filterProducts(searchTerm: string) {
    let filterProducts = [...shopItemsArr]
    filterProducts = filterProducts.filter((itemMovie) => itemMovie.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    renderProducts(filterProducts);
}