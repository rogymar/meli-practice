import { Parent } from "../types/props"

export type PageProps = Parent

export default function Page({ children}: PageProps) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-between my-4 mx-[93px]'>
        {children}
      </main>
    )
  }