import { useCallback, useState } from 'react'
import { Movie } from '../../model/Discover'
import { environment } from '../../environment'
import { api } from '../../Service/api'

export const useFetch = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  const request = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await api.get(environment.API_URL + environment.API_KEY)

      setMovies(data.results)
    } catch (error) {
      //@ts-ignore
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }, [])
  return {
    movies,
    loading,
    request
  }
}
