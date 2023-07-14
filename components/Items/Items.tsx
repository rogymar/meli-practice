import { Item } from "./Item";

export function Items () {
    return (
        <section className='w-full p-4 bg-white rounded [&>*:not(:last-child)]:border-b'>
            <Item />
            <Item />
        </section>
    )
}