import { cart } from "../cart/cartFunctions.js";
import { backToStoreBtn } from "../cart/cartFunctions.js";
import { setCartLocalStorage } from "../storage/storage.js";


const renderCartCheckOut = () => {

    let containerItemsCheckOut = document.getElementById('containerItemsCheckOut')
    const itemCheckOut = document.createElement('div')

    cart.forEach((element) => {

        const totalItem = element.price * element.amount

        const cartItem = `
        <div class="item ${element.id}">
            <span class="price">$${totalItem}</span>
            <p class="item-name">${element.name}</p>
            <p class="item-description">${element.amount}</p>
        </div>
        `

        itemCheckOut.innerHTML += cartItem;
        containerItemsCheckOut.appendChild(itemCheckOut);
    })

    const total = cart.reduce((acc, el) => acc + (el.price * el.amount), 0)
    let printTotal = document.createElement('div');
    printTotal.innerHTML = `
            <div class="total">Total<span class="price">$${total}</span></div>
    `
    containerItemsCheckOut.appendChild(printTotal)

  
    const backToStore = backToStoreBtn()
    containerItemsCheckOut.appendChild(backToStore)
    
}


const formData = () => {
    
    const continueBtn = document.getElementById('continueBtn')
    const finishBtn = document.getElementById('finishBtn')
    const form = document.getElementById('form')
    
    const creditCardDetails = document.getElementById('card-details')
    continueBtn.addEventListener('click', () => {
        creditCardDetails.classList.remove('d-none')
    });

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const name = document.getElementById('name').value 
        const lastName = document.getElementById('surname').value 
        const adress = document.getElementById('adress').value
        const telephone = document.getElementById('phoneNumber').value
        const city = document.getElementById('city').value
        const postCode = document.getElementById('postCode').value 
        const email = document.getElementById('email').value

        const customerInfo = {
            name,
            lastName,
            adress,
            telephone,
            city,
            postCode,
            email
        }

        const cardHolder = document.getElementById('cardHolder').value
        const cardNumber = document.getElementById('cardNumber').value 
        const expirationMonth = document.getElementById('expirationMonth').value 
        const expirationYear = document.getElementById('expirationYear').value
        const CVC = document.getElementById('cvc').value 
        
        const cardDetails = {
            cardHolder,
            cardNumber,
            expirationMonth,
            expirationYear,
            CVC
        }
        
        console.log(customerInfo);
        console.log(cardDetails)
        
        form.reset()
        
    })

    finishBtn.addEventListener('click', () =>{

        cart.length = 0;
        setCartLocalStorage(cart);

        Swal.fire({
            title: 'Pronto recibiras un correo confirmando tu compra.' + '\n' + 'Gracias por elegir Hampi Yura!',
            confirmButtonText: 'ok',
          }).then((result) => {
            if (result.isConfirmed) {
                window.location = '../../../index.html'
            } 
          })


         })
    
}

renderCartCheckOut()
formData()

export { renderCartCheckOut , formData}