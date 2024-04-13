import type { Movie } from '../types'
import style from '../styles/movies.module.css'

interface Props {
  movie: Movie
}

export default function MoviesItem({ movie }: Props) {
  const { title, image } = movie
  return (
    <article
      className={`${style.animation} flex flex-col text-neutral-100 shadow-xl shadow-neutral-600/10 rounded-3xl border border-neutral-700`}
    >
      <picture>
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt={`Image of ${title}`}
          className='aspect-[10/14] object-cover rounded-t-3xl border-b border-neutral-700'
        />
      </picture>
      <div className='flex-grow flex flex-col justify-around py-3 px-3 gap-y-1'>
        <h3 className='font-semibold'>{title}</h3>
        <div className='flex justify-between'></div>
      </div>
    </article>
  )
}
