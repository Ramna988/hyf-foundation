const productList = document.querySelector(".products");

function renderProducts(products) {
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const li = document.createElement("li");

    const title = product.title || product.name;
    li.innerHTML =
      "<strong>" +
      title +
      "</strong> - Price: " +
      product.price +
      " | Rating: " +
      product.rating;

    productList.appendChild(li);
  }
}

const products = getAvailableProducts();
renderProducts(products);
