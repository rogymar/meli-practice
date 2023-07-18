import Image from "next/image";

import freeShippin from "@/public/freeSm.png";
import { ListedItem } from "@/sites/types";

export type ItemProps = {
  item: ListedItem
}

export function Item( {item }: ItemProps) {
  return (
    <div className='w-full bg-white rounded grid grid-cols-[180px_auto_180px] gap-4 py-4'>
        <Image src={item.picture} alt='thumbnail' width={180} height={180} className='h-full w-full rounded' />
        <div>
            <div className='flex items-center gap-2 pt-4'>
                <p className='text-2xl'>{item.price.amount}</p>
                <Image src={freeShippin} alt='free-shipin' className='h-5 w-5' />
            </div>
            <p className='pt-8 text-lg'>{item.title}</p>
        </div>
        <p className='text-xs text-medGray pt-8'>{item.state}</p>
    </div>
  );
}
