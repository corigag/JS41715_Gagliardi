import { addToCart } from "./components/cart/cartFunctions.js";


const renderProducts = (products) => {
    
    const containerBtn = document.getElementById('containerBtn');
    const btnBack = document.createElement('span');
    btnBack.innerHTML= `
    <a href="index.html" class="text-decoration-none text-reset"><img src="public/images/atras.png" alt="flecha atras" class="flecha_icono"></a>
    
    `
    containerBtn.appendChild(btnBack);
    
    //capturo contenedor productos
    const mainContainer = document.getElementById('mainContainer');
    
    //agrego clases a div principal tienda
    //mainContainer.classList.add('container-xxl');
    mainContainer.classList.add('d-flex');
    mainContainer.classList.add('flex-wrap');
    
    
    //pinta productos en HTML
    products.forEach((element) => {
        
        if(element.stock === 0){
      
        element.price = element.price + " / Sin stock"
    
      }
      
        const itemCard = document.createElement('div');
        
        itemCard.classList.add('col-12');
        itemCard.classList.add('col-md-6');
        itemCard.classList.add('text-center');
        itemCard.classList.add('my-1');
        itemCard.classList.add('d-flex');
        
        
        itemCard.innerHTML += `
        <div class="card" style="width: 18rem;">
                <img src=${element.image} class="card-img-top imagen" alt="imagen producto">
            <div class="card-body d-flex justify-content-between">
            <div id="productInfo">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text valor">$${element.price}</p>   
            </div>
            <div>
                <a href="#" class="btn addToCart id="${element.id} ">+</a>
            </div>
        </div>
        `;
        

        mainContainer.appendChild(itemCard);
        
        //boton agregar al carrito
        const addToCartButton = itemCard.querySelector('.addToCart');
        addToCartButton.addEventListener('click',()=>{
            addToCart(element.id);
            
        })

        if(element.stock === 0){

            addToCartButton.remove()
        }

    })
}

export { renderProducts };