let title = document.querySelectorAll('h4')
let price = document.querySelectorAll('.discount')


buttonDelete = document.querySelector("#cart-table")
buttonDelete.addEventListener('click', deleteArticle)

buttonEmpty = document.querySelector("#empty_cart")
buttonEmpty.addEventListener('click', emptyCart)

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

// fonction suprimer un article
function deleteArticle(){
    let deleteBtn = document.querySelectorAll('.deleteBtn');
        for (let i = 0; i < deleteBtn.length; i++){
            deleteBtn[i].addEventListener('click', () => {
                alert('Click on "ok" if you want to delete the article')
                let newCart = getLocalStorage()
                newCart.splice(i, 1)
                localStorage.setItem("cartNumbers", JSON.stringify(newCart))
                displayCart(getLocalStorage())
        }) 
    }
}

// vider le panier
function emptyCart(){
    let empty = []
    localStorage.setItem("cartNumbers", JSON.stringify(empty))
    displayCart(getLocalStorage())
}