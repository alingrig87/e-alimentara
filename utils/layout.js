export function mapProductToCard(product) {
	return `
        <div class="card flex-col  items-center justify-around gap-20">
            <div class="info  flex-col items-center gap-20">
                <div class="img">
                    <img src=${product.imageURL} alt="">
                </div>
                <div class="name">
                    <h4>${product.name}</h4>
                </div>
                <div class="price">${product.price} lei</div>
            </div>
            <button class="add-to-cart">Adauga in cos</button>
        </div>
    `;
}
