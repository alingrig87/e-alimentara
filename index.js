import { getAllProducts } from './api/alimente.js';
import { mapProductToCard } from './utils/layout.js';

document.addEventListener('DOMContentLoaded', displayProducts);

async function displayProducts() {
	const products = await getAllProducts();
	document.querySelector('.products').innerHTML = products
		.map(mapProductToCard)
		.join('');

	const addToCartButtons = document.querySelectorAll('.add-to-cart');
	addToCartButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const productId = button.getAttribute('data-productId');
			let cart = JSON.parse(localStorage.getItem('cart')) || {};

			if (cart[productId]) {
				cart[productId].quantity++;
			} else {
				cart[productId] = { quantity: 1 };
			}

			localStorage.setItem('cart', JSON.stringify(cart));
		});
	});
}
