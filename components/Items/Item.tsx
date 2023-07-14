import Image from "next/image";

import freeShippin from "@/public/freeSm.png";

export function Item() {
  return (
    <div className='w-full bg-white rounded grid grid-cols-[180px_auto_180px] gap-4 py-4'>
        <Image src='http://mla-s1-p.mlstatic.com/943469-MLA31002769183_062019-I.jpg' alt='thumbnail' width={180} height={180} className='h-full w-full rounded' />
        <div>
            <div className='flex items-center gap-2 pt-4'>
                <p className='text-2xl'>$ 2800</p>
                <Image src={freeShippin} alt='free-shipin' className='h-5 w-5' />
            </div>
            <p className='pt-8 text-lg'>Description</p>
        </div>
        <p className='text-xs text-medGray pt-8'>Location</p>
    </div>
  );
}
