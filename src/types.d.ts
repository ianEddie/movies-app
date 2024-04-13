export interface Movie {
  id: number
  background: string
  image: string
  title: string
  description: string
  release: string
  rate: number
  language: string
}

export type Movies = Movie[]

export interface Store {
  movies: Movie[]
  updateMovies: (data: Movies) => void
}
