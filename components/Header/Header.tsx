import Image from "next/image";

import meliLogoLg from "@/public/logoLg.png";

import { SearchBar } from "../Search/SearchBar";

export function Header() {
  return (
    <header className="w-full bg-header py-2.5 px-8 lg:px-5">
      <div className='w-full m-auto max-w-screen-xl grid grid-cols-[58px_auto] h-10 gap-4'>
        <Image src={meliLogoLg} alt="Mecadolibre-Logo"
        className="col-span-1 object-contain h-full w-full" />
        <SearchBar className="col-span-1 w-full" />
      </div>
    </header>
  );
}
