let dropDownCart = document.querySelector(".tr_phase2_shopping-bag_content");
console.log(dropDownCart);

let container = document.querySelector("#container");
//contentDiv.innerHTML += miniCart.innerHTML;

console.log(container.offsetHeight);

window.onscroll = () => {
    let bottomOffset = 1000;
    let pastBottomTrigger = (window.innerHeight + window.pageYOffset) >= container.offsetHeight - bottomOffset;
    if (pastBottomTrigger){
        alert(1);
    }
};

let modalBackground = document.createElement('div');
modalBackground.className = "bottom-cart-modal";
document.body.appendChild(modalBackground);

let cartStyleLink  = document.createElement('link');
cartStyleLink.rel  = 'stylesheet';
cartStyleLink.type = 'text/css';
cartStyleLink.href = 'http://127.0.0.1:5500/cartStyle.css';
document.head.appendChild(cartStyleLink);
