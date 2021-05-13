let cartClone;
let modalContainer;

function initializeBottomCart(){
    cartClone = cloneCart();

    modalContainer = addModalContainer();
    modalContainer.appendChild(cartClone);

    addCloseButton();

    addStyleSheet();
}

initializeBottomCart();

let canBeTriggered = true
let container = document.querySelector("#container");
window.onscroll = () => {
    let adjustedScrollDistance = window.pageYOffset + window.innerHeight;

    let bottomOffset = 1000;
    let bottomTrigger = container.offsetHeight - bottomOffset;

    let pastBottomTrigger = adjustedScrollDistance >= bottomTrigger;
    if (pastBottomTrigger && canBeTriggered){
        showModal();
        canBeTriggered = false;
    }

    if(!pastBottomTrigger){
        canBeTriggered = true;
    }
};

window.onclick = (event) => {
    hideModalOnBackgroundClick(event);
}

function cloneCart(){
    let dropDownCart = document.querySelector(".tr_phase2_sub_header");
    let cartClone = dropDownCart.cloneNode(true);
    return cartClone;
}

function addModalContainer(){
    let modalContainer = document.createElement("div");
    modalContainer.className = "bottom-cart-modal";
    document.body.appendChild(modalContainer);
    return modalContainer;
}

function addCloseButton(){
    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = () => {
        hideModal();
    }
    cartClone.prepend(closeButton);
    return closeButton;
}

function addStyleSheet(){
    let cartStyleLink = document.createElement("link");
    cartStyleLink.rel = "stylesheet";
    cartStyleLink.type = "text/css";
    cartStyleLink.href = "https://shadopawn.github.io/wunderkind-technical-test/cartStyle.css";
    document.head.appendChild(cartStyleLink);
}

function hideModalOnBackgroundClick(event){
    if (event.target == modalContainer){
        hideModal();
    }
}

function hideModal(){
    modalContainer.style.display = "none";
}

function showModal(){
    modalContainer.style.display = "flex";
}