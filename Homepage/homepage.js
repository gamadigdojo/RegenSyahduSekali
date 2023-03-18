const menu = document.querySelector('#menu-icon'),
    navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('.bx-x')
    navbar.classList.remove('active')
}

const products = document.querySelectorAll('.box');
let currentProductIndex = 0;

function showNextProduct() {
  // remove zoom-in class from current product and add zoom-out class
  products[currentProductIndex].classList.remove('zoom-in');
  products[currentProductIndex].classList.add('zoom-out');

  // update index to show next product
  currentProductIndex++;
  if (currentProductIndex >= products.length) {
    currentProductIndex = 0;
  }

  // remove zoom-out class from next product and add zoom-in class
  products[currentProductIndex].classList.remove('zoom-out');
  products[currentProductIndex].classList.add('zoom-in');
}

const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', showNextProduct);
