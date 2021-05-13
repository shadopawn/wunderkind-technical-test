let dropDownCart = document.querySelector(".tr_phase2_sub_header");
console.log(dropDownCart);

let cartClone = dropDownCart.cloneNode(true);

let container = document.querySelector("#container");
window.onscroll = () => {
    let bottomOffset = 1000;
    let pastBottomTrigger = (window.innerHeight + window.pageYOffset) >= container.offsetHeight - bottomOffset;
    if (pastBottomTrigger){
        showModal();
    }
};

let modalContainer = document.createElement('div');
modalContainer.className = "bottom-cart-modal";
document.body.appendChild(modalContainer);

modalContainer.appendChild(cartClone);

let closeButton = document.createElement('span');
closeButton.className = "close";
closeButton.innerHTML = "&times;";
cartClone.prepend(closeButton);

closeButton.onclick = () => {
    hideModal();
}

let cartStyleLink  = document.createElement('link');
cartStyleLink.rel  = 'stylesheet';
cartStyleLink.type = 'text/css';
cartStyleLink.href = 'http://127.0.0.1:5500/cartStyle.css';
document.head.appendChild(cartStyleLink);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalContainer) {
        hideModal();
    }
}

function hideModal(){
    modalContainer.style.display = "none";
}

function showModal(){
    modalContainer.style.display = "flex";
}