import { useHeroInfo } from '../hooks/useHeroInfo'
import DateIcon from '../icons/DateIcon'
import LangIcon from '../icons/LangIcon'
import StarIcon from '../icons/StarIcon'

export default function HeroInfo() {
  const { description, rate, release, title, language } = useHeroInfo()
  return (
    <article className=' w-full h-full text-white flex flex-col justify-center sm:items-start items-center pl-10 sm:pr-0 pr-10 gap-y-7 backdrop-blur-[1px] bg-gradient-to-r from-black via-black/70 to-transparent'>
      <h1 className='text-5xl font-title tracking-wider'>{title}</h1>
      <div className=' flex items-center gap-x-10 font-text font-semibold'>
        <div className='flex items-center gap-2'>
          <StarIcon />
          <span className=''>{rate}</span>
        </div>
        <div className='flex items-center gap-3'>
          <DateIcon />
          {release}
        </div>
        <div className='uppercase flex items-center gap-2'>
          <LangIcon />
          {language}
        </div>
      </div>
      <p className='sm:max-w-[50%] text-pretty font-text sm:text-[17px] text-[15px] font-medium'>
        {description}
      </p>
    </article>
  )
}
