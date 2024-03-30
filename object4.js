const menu = {
    _catalog: [
        {
            item: 'Drive Shaft',
            itemId: 100432,
            itemCost: '$1500'
        },
        {
            item: 'TPS sensor',
            itemId: 100535,
            itemCost: '$200'
        },
        {
            item: 'Fuel Injectors',
            itemId: 111324,
            itemCost:"$150"
        },
    ],
    addItem(itemName, idNumber, costTotal) {
        if (typeof itemName === 'string' && typeof idNumber === 'number' && typeof costTotal === 'string') {
            if (idNumber.toString().length === 6) {
                const item = {
                    item: itemName,
                    itemId: idNumber,
                    itemCost: costTotal
                };
                this._catalog.push(item);
            } else {
                throw "ID number is not 6 digits long";
            }
        } else if (typeof idNumber !== 'number') {
            throw 'ID number is not a number';
        } else if (typeof costTotal !== 'string') {
            throw "Cost total must be formatted like the example: '$400'";
        }
    },
    get catalog() {
        let catalogString = '';
        for (let i = 0; i < this._catalog.length; i++) {
            catalogString += `Item: ${this._catalog[i].item} Id: ${this._catalog[i].itemId} cost: ${this._catalog[i].itemCost}\n`;
        }
        return catalogString;
    },
    deleteItem(itemName) {
        for (let i = 0; i < this._catalog.length; i++) {
            if(this._catalog[i].item === itemName) {
                this._catalog.splice(i, 1);
                console.log('item successfully removed.');
        }
    }
},
}
menu.addItem('Serpentine Belt', 683484, '$60');
menu.addItem('alternator', 356445, '$650');
menu.addItem('Fel-Pro Water Pump Gasket Set', 543553, '$20');
menu.deleteItem('alternator');
console.log(menu.catalog);
