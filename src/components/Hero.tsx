import HeroBackground from './HeroBackground'
import HeroInfo from './HeroInfo'

export default function Hero() {
  return (
    <section className='h-[100dvh] relative flex items-center justify-center text-white'>
      <HeroBackground />
      <HeroInfo />
    </section>
  )
}
