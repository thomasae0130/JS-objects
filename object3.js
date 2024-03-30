const menu = {
    _catalog: {},
    _price: {},


    set catalog(catalogItem) {
        if(typeof catalogItem === "string") {
            return this._catalog = catalogItem;
        } else {
            return "Error not an item.";
        }
    },

    set price(catalogPrice) {
        if(typeof catalogPrice === 'number') {
            return this._price = catalogPrice;
        } else {
            return "Error not a price.";
        }
    },
    get catalogList() {
        if(this._catalog && this._price) {
            return ` Item: ${this._catalog} Cost: ${this._price} `;
        } else {
            return "You fucked up somewhere."
        }
    }
}
menu.catalog = 'Drive Shaft';
menu.price = 500;
console.log(menu.catalogList);