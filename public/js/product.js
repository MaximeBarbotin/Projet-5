const ajax = new Ajax();


const params = new URLSearchParams(document.location.search.substring(1))
const productId = params.get('productId')

// Affichages données fiche produit
function displayTeddieDetails(teddieData) {
    const mainProduct = document.querySelector('.main_product')
    mainProduct.innerHTML = `<div class="product_section">
            <h1 id="product_title">${teddieData.name}</h1>
            <div class="image_section">
                <img src="${teddieData.imageUrl}" alt="ourson en peluche">
            </div>
            <div class="product_description">
                <p>${teddieData.description}</p>
            </div>
        </div>
        <aside>
            <div>
                <h2>${teddieData.name}</h2>
                <div class="product_description">
                    <p>${teddieData.price / 100}€</p>
                </div>
                <div class="product_option">
                    <select id="color_selector" name="colors">
                        ${teddieData.colors.map((color) => `<option value="${color}">${color}</option>`)}
                    </select>
                </div>
            </div>
            <div class="basket_add_section">
                <button type="button" id="basket_add_button">Ajouter au panier</button>
            </div>
        </aside>`

    // Selection couleur
    const select = document.querySelector('#color_selector');

    // Bouton ajouter au panier
    const basketAdd = document.getElementById('basket_add_button');

    basketAdd.addEventListener('click', (e) => {
        e.preventDefault();
        const product = {
            selectedTeddy: teddieData._id,
            teddyColor: select.value
        }
        const cart = JSON.parse(localStorage.getItem('cart')) || {}
        const key = `${product.selectedTeddy}-${product.teddyColor}`
        let quantity = 1
        if (cart[key]) {
            quantity = cart[key]['quantity'] + 1
        }

        cart[key] = {
            ...teddieData,
            quantity,
            color: select.value
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    })
}

// Récupération données produit
ajax
    .get(`https://oc-p5-api.herokuapp.com/api/teddies/${productId}`)
    .then((teddieData) => {
        displayTeddieDetails(teddieData)
    })






