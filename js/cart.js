window.onload = displayCart(getLocalStorage())

let carts = document.querySelectorAll('.add-to-cart');

// evenement click on add to carts
for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        alert('Click on "ok" if you want to add the article')

        let article = getArticle(carts[i])
        let storage = getLocalStorage()
        
        storage.push(article)
        localStorage.setItem('cartNumbers', JSON.stringify(storage))
        displayCart(storage)
    }) 
}

// function creation of an article object
function getArticle(button){
    
    let parent = button.parentNode
    let grandParent = parent.parentNode
    
    let articleTitle = parent.querySelector('h4').innerHTML
    let articlePrice = parent.querySelector('.discount').innerHTML
    let articleImg = grandParent.querySelector('img').src

    const article = {

        title: articleTitle,
        price: articlePrice,
        image: articleImg
    }
    return article
}

// creation of a local storage array
function getLocalStorage(){
    if(localStorage.getItem('cartNumbers')){
        table = JSON.parse(localStorage.getItem('cartNumbers'))
        return table
    }
    else {
        return table = []
    }
}



function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('#cart-table tbody').textContent = productNumbers;
    }
}

// creation of the product number (index of each product)
function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#cart-table tbody').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#cart-table tbody').textContent = 1;

    }

    setItems(product);

}
//adding products to local storage
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if(cartItems[product.title] == undefined ){
            cartItems = {
                ...cartItems,
                [product.title]: product
            }
        }
        cartItems[product.title].inCart += 1;
    } else {
            product.inCart = 1;
            cartItems = {
            [product.title]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

// function written in the html of the shopping cart
function displayCart(storage){
    let productContainer = $("#tbody");
    
    $("tr").remove(".pan")
    if(storage){
        storage.forEach(article => {
        let tbody = '<tr class="pan"><td><img src="'+article.image+'" style="width:30%"></td><td>'+article.title+'</td><td>'+article.price+'</td><td>1</td><td><i class="fa fa-times-circle deleteBtn" style="color:red;cursor:pointer"></i></td></tr>';
        productContainer.append(tbody)
    })
    }
}
