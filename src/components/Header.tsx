import Search from './Search'
import style from '../styles/header.module.css'

export default function Header() {
  return (
    <header
      className={`${style.animation} fixed z-30 w-full flex justify-between items-center px-10 py-1`}
    >
      <a href='/' className='text-white font-semibold text-lg'>
        Moviez
      </a>

      <Search />
    </header>
  )
}
