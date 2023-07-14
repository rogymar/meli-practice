import Image from 'next/image';

import searchIconDesk from '@/public/searchLg.png';
import { Stylable } from '../types/props';

export function Button ({ className}: Stylable) {
    return (
        <div className={className}>
            <button className='bg-background rounded-r-[4px] p-2 h-full w-full hover:bg-lightGray'>
                <Image
                className='object-contain h-full w-full'
                src={searchIconDesk}
                alt='Search'></Image>
            </button>
        </div>
    )
}