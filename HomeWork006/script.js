const dataProducts = JSON.parse(dataProductsJSON);
console.log(dataProducts);

let productTemplate = document.querySelector('#productTemplate .product');

let container = document.querySelector('.container');

dataProducts.forEach(element => {
    let product = productTemplate.cloneNode(true);
    product.querySelector(".product_image img").src = element.image;
    product.querySelector(".product_info .product_title").textContent = element.title;
    let price = product.querySelector(".product_info .product_price")
    price.textContent = price.textContent + element.price;
    let color = product.querySelector(".product_info .product_color")
    color.textContent = color.textContent + element.color;
    let size = product.querySelector(".product_info .product_size")
    size.textContent = size.textContent + element.size;
    let quantity = product.querySelector(".product_info .product_quantity")
    quantity.textContent = quantity.textContent + element.quantity;
    container.appendChild(product);

});