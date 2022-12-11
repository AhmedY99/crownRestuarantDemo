/*===========================cart===================================================*/


let cartIcon = document.querySelector(".shopping-Icon");
let cart = document.querySelector(".cart");
let removeCart = document.querySelector(".cart-times");

cartIcon.onclick = () => {
    cart.classList.add("active");
}
removeCart.onclick = () => {
    cart.classList.remove("active");
}

// cart working JS
if (document.readyState == 'loading') {
    // preventDefault();
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
// making Function
// local storage


function ready() {
    var removeCartBtn = document.getElementsByClassName('removeIcon')
    //console.log(removeCartBtn);
    for (var i = 0; i < removeCartBtn.length; i++) {
        var button = removeCartBtn[i];
        button.addEventListener('click', removeCartItem);
    }
    // quanity changes
    var quanityInputes = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quanityInputes.length; i++) {
        var input = quanityInputes[i];
        input.addEventListener("change", quantityChanged)

    }
    // add to the cart

    var addCart = document.querySelectorAll('.add-cart');
    addCart.forEach((btnClick) => {
        btnClick.addEventListener('click', addCarClicked)
    })
    // buy button
    document.getElementsByClassName("buyBtn")[0].addEventListener("click", buyButtonClicked);
}

// buy button work 
function buyButtonClicked() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    cartContent.parentElement.parentElement;

    while (cartContent.hasChildNodes()) {
        alert("Thank Your Oder");
        cartContent.removeChild(cartContent.firstChild);

    }
    addNumberItem();
    update();
    taxUpdate();
    totalPriceUpdate();
    localStorage.clear();

}
// remover item form cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    addNumberItem();
    update();
    taxUpdate();
    totalPriceUpdate();
    localStorage.clear();
   
}


// quanity changes
function quantityChanged(e) {
    var input = e.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    } else {
        var id = input.value;
        console.log(id);
    }
    localStorage.getItem("data");
    addNumberItem();
    update();
    taxUpdate();
    totalPriceUpdate();
  

}


function addCarClicked(e) {
    e.preventDefault();
    const button = e.target;
    const itemList = button.parentElement;
    //const id = itemList.getAttribute("data-id");

    const itemImage = itemList.getElementsByClassName('item-image')[0].src;
    const title = itemList.getElementsByClassName('item-title')[0].innerText;
    const priceItem = itemList.getElementsByClassName('price')[0].innerText;
    const price = priceItem.slice(1).trim();

    updateCart(title, price, itemImage);

    addNumberItem();
    update();
    taxUpdate();
    totalPriceUpdate();



}
const itemProduct = [];
function updateCart(title, price, itemImage) {
    const itemShopList = document.createElement("div");
    itemShopList.classList.add("cart-holder");
    const shopItemList = document.getElementsByClassName('cart-content')[0];

    var itemList = shopItemList.getElementsByClassName('product-title');
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].innerHTML == title) {
            alert("Item is Already In the Cart!!!!");
            return
        }
    }
    let cartBoxContent = `
            <img src= ${itemImage} alt="" class="cart-image">
            <div class="cart-detial">
            <div class="product-title" id="product-title">${title}</div>
            <div class="product-price" id="price">$ ${price}</div>
            <input type="number" value="1" id="cart-quantity" class="cart-quantity">
            </div>
            <!-------Remove-->
            <i class="fa fa-trash-o removeIcon"></i>
        `;
    itemShopList.innerHTML = cartBoxContent;
    //shopItemList.append(itemShopList);
    localStorage.setItem("item", (cartBoxContent));

    shopItemList.append(itemShopList);
    itemProduct.innerHTML = itemShopList;
    itemShopList.getElementsByClassName("removeIcon")[0].addEventListener("click", removeCartItem);

    itemShopList.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
    

}

//update total

function update() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartHolder = cartContent.getElementsByClassName('cart-holder');
    var total = 0;
    for (var i = 0; i < cartHolder.length; i++) {
        var cartholder = cartHolder[i];
        var priceElement = cartholder.getElementsByClassName('product-price')[0];
        var quantityElement = cartholder.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    // if contains some cent value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price-items')[0].innerText = "$ " + total;


}

function taxUpdate() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartHolder = cartContent.getElementsByClassName('cart-holder');
    var tax = 0;
    for (var i = 0; i < cartHolder.length; i++) {
        var cartholder = cartHolder[i];
        var priceElement = cartholder.getElementsByClassName('product-price')[0];
        var quantityElement = cartholder.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        tax = tax + (price * 0.15 * quantity);
    }
    // if contains some cent value
    tax = Math.round(tax * 100) / 100;

    document.getElementsByClassName('tax-price-items')[0].innerText = "$ " + tax;


}

function totalPriceUpdate() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartHolder = cartContent.getElementsByClassName('cart-holder');
    var total = 0;
    var tax = 0;
    var totalPrice = 0;
    for (var i = 0; i < cartHolder.length; i++) {
        var cartholder = cartHolder[i];
        var priceElement = cartholder.getElementsByClassName('product-price')[0];
        var quantityElement = cartholder.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = (price * quantity);
        tax = (price * 0.15 * quantity);
        totalPrice = (total + tax);
    }
    totalPrice = Math.round(totalPrice * 100) / 100;
    document.getElementsByClassName('totalPrice')[0].innerText = "$ " + totalPrice;

}


function addNumberItem() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var itemList = cartContent.querySelectorAll('.cart-quantity');
    var itemQuantity = 0;
    for (var i = 0; i < itemList.length; i++) {
        if (parseInt(itemList[i].value)) {
            itemQuantity += parseInt(itemList[i].value);

        }
    }
    //console.log(itemQuantity);
    document.getElementsByClassName('quantity')[0].innerHTML = +itemQuantity;
    update();

}