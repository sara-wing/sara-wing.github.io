
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    addLi(productInput.value, quantityInput.value);
    productInput.value = '';
    quantityInput.value = '';
});

const addLi = (product, quantity) => {
    const newListItem = document.createElement('li');
    const liWithText = newListItem.textContent = `${quantity} ${product}`;
    document.querySelector('ul').appendChild(newListItem);
}
