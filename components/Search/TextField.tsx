import classNames from "classnames";

import { Stylable } from "../types/props";

export function TextField ({ className}: Stylable) {
    const containerStyles = classNames(
        'w-full',
        className
    )
    return (
        <div className={containerStyles}>
            <input
            className='w-full h-full rounded-l-[4px] p-2 text-lg outline-blueDetails'
            type='text' 
            placeholder='Nunca dejes de buscar...'
            id='search' />
        </div>
    )
}