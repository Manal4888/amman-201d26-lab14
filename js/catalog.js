/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
// console.log(Product.allProducts)
const cart = new Cart([]);
console.log(cart);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    
    let product=document.createElement('option')
    items.appendChild(product)
    product.textContent =Product.allProducts[i].name;
  

}}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}
let counter=0;

let item;
let quantity;
// TODO: Add the selected item and quantity to the cart
 
// TODO: Add the selected item and quantity to the cart
 function addSelectedItemToCart() {
  item= document.getElementById('items').value;
  quantity=document.getElementById('quantity').value;
 
  cart.addItem(item,quantity);
  
 
  cart.saveToLocalStorage()
  {
    const cartItems = JSON.stringify(localStorage.getItem('cart')) ;
    console.log(cartItems)
  }

  //cart.addItem(item,quantity)
  counter=counter+1;

 }
  //cart.push(item)
  //cart.saveToLocalStorage(item,quantity);
  //console.log(cart);
 // localStorage.setItem(selected,quantity);  
  
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart







// TODO: Update the cart count in the header nav with the number of items in the Cart


function updateCounter() {

  let count=document.getElementById('itemCount')
  count.textContent=` has ${counter} items`
}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let cartContents=document.getElementById('cartContents')
  let cartProducts=document.createElement('p')
  cartContents.appendChild(cartProducts);
  cartProducts.textContent=` Cart : item = ${item} quantity = ${quantity}`;
    
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
