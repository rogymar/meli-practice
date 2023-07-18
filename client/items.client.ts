export type Author = {
    name: string
    lastname: string
}

export type ListenedItem = {
    id: string
    title: string
    price: {
        currency: string
        amount: number
        decimals: number
    },
    free_shipping: boolean
    picture: string
    condition: string
    thumbnail: string
    state: string
}

export type ItemList = {
    author: Author
    categories: string
    items: ListenedItem
}