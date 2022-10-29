import { renderProducts } from "./app.js";
import { renderCart } from "./components/cart/cartFunctions.js";
import { getCartLocalStorage } from "./components/storage/storage.js"
import { showProductsController } from "./controllers/showProductsController.js";

const render = (products) => {
    const containerBanners = document.getElementById('containerBanners');
    containerBanners.classList.add('d-none');
    renderProducts(products)
}

document.addEventListener('DOMContentLoaded' , async () => {

    const products = await showProductsController();

const btnAllProducts = document.getElementById('btnAllProducts');
btnAllProducts.addEventListener('click', () =>{
    const textAreaAllProducts = document.getElementById('textAreaAllProducts')
    textAreaAllProducts.classList.remove('d-none')
    render(products)
});

const btnPiel = document.getElementById('btnPiel')
btnPiel.addEventListener('click', () => {
    const textAreaCremas = document.getElementById('textAreaCremas')
    textAreaCremas.classList.remove('d-none')
    const filterPiel = products.filter ((item) => item.category === 'Cremas')
    render(filterPiel)
});

const btnTinturas= document.getElementById('btnTinturas')
btnTinturas.addEventListener('click', () => {
    const textAreaCremas = document.getElementById('textAreaTinturas')
    textAreaTinturas.classList.remove('d-none')
    const filterTinturas = products.filter ((item) => item.category === 'Tinturas')
    render(filterTinturas)
});

const btnVerano= document.getElementById('btnVerano')
btnVerano.addEventListener('click', () => {
    const textAreaCremas = document.getElementById('textAreaVerano')
    textAreaVerano.classList.remove('d-none')
    const filterVerano = products.filter ((item) => item.category === 'Verano')
    render(filterVerano)
});

const btnHigiene= document.getElementById('btnHigiene')
btnHigiene.addEventListener('click', () => {
    const textAreaCremas = document.getElementById('textAreaHigiene')
    textAreaHigiene.classList.remove('d-none')
    const filterHigiene = products.filter ((item) => item.category === 'Higiene')
    render(filterHigiene)
});

    if (localStorage.getItem('cart')) {
        const localStorageCart = getCartLocalStorage();
        renderCart(localStorageCart);
    }
})