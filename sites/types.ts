export type Author = {
    name: string
    lastname: string
}

export type ListedItem = {
    id: string
    title: string
    price: {
        currency: 'ARS' | 'USD'
        amount: number
        decimals: number
    },
    free_shipping: boolean
    picture: string
    condition: 'new' | 'used'
    state: string
}

export type ItemList = {
    author: Author
    categories: string[]
    items: ListedItem[]
}

export type DetailItem = ListedItem & {
    sold_quantity: number
    description: string
}

export type ItemDetail = {
    author: Author
    item: DetailItem
}