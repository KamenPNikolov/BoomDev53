import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let divProduct = document.getElementsByClassName("product");
  console.log(divProduct);
  let price = document.getElementsByClassName("price")[0].innerHTML;
  console.log(price);
  divProduct[0].setAttribute("data-price",price);
  console.log("price set to " + price);

});
