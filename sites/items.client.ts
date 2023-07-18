import { ItemList, ListedItem } from "./types";

export function search (): ItemList {
    const item: ListedItem = {
        id: 'kajfjdfjan',
        title: 'Cosas Varias',
        condition: 'used',
        free_shipping: true,
        picture: 'http://mla-s1-p.mlstatic.com/943469-MLA31002769183_062019-I.jpg',
        price: {
            amount: 17999,
            currency: 'ARS',
            decimals: 0
        },
        state: 'Capital Federal'
    }

    return {
        author: {
            name: 'Rogymar',
            lastname: 'Chirinos'
        },
        categories: ['cosas', 'varias'],
        items: [
            item, item, item, item
        ]
}
}