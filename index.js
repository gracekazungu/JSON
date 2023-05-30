const productContainer=document.getElementById("products");

const getProducts=()=>{
   return fetch('https://dummyjson.com/products')
   .then(response=>response.json())
   .then(response=>response)
   .catch(error=>error.message)
};
getProducts();

const displayProducts=async()=>{
const products=await getProducts();
console.log(products.products);
products.products.map(product=>{
    // let div=document.createElement("div");
    // div.className=("items");
    // let img=document.createElement("img");
    const productElement = document.createElement('div');
    productElement.id=('product');
    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.title;
    productElement.appendChild(imageElement);
    const titleElement = document.createElement('h3');
    titleElement.textContent = product.title;
    productElement.appendChild(titleElement);
    const priceElement = document.createElement('p');
    priceElement.textContent = `${product.price}`;
    productElement.appendChild(priceElement);
    productContainer.appendChild(productElement);
  });

}
displayProducts();
