import { create } from 'zustand'
import type { Store } from '../types'

const useMoviesStore = create<Store>((set) => ({
  movies: [],
  updateMovies: (data) => set({ movies: data })
}))

export default useMoviesStore
