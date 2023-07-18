import * as itemsClient from "@/sites/items.client";
import { Item } from "./Item";

const renderItems = () => {
    const listedItems = itemsClient.search().items
    return listedItems.map((listedItem) => (<Item item={listedItem} />))
}

export function Items () {
    return (
        <section className='w-full p-4 bg-white rounded [&>*:not(:last-child)]:border-b'>
            {renderItems()}
        </section>
    )
}