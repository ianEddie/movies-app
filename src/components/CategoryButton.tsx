import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function CategoryButton({ children }: Props) {
  return <button className='bg-neutral-100/90 w-32 py-5 rounded-lg backdrop-blur-[10px]'>{children}</button>
}
