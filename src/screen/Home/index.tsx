import React, { useEffect } from 'react'
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate
} from 'react-native-reanimated'

import { List } from '../../components/List'
import { useFetch } from '../../Hooks/useFetch'
import { Loading } from '../../components/Loading'

import * as S from './styles'

export function Home() {
  const { movies, loading, request } = useFetch()

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 10, 40], [0, 0.9, 1])
    }
  })

  useEffect(() => {
    request()
  }, [])

  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <S.AnimatedHeader style={[headerStyleAnimation]}>
            <S.BlurHeader>
              <S.Title>Popular Movies</S.Title>
            </S.BlurHeader>
          </S.AnimatedHeader>
          <List movies={movies} onScroll={scrollHandler} />
        </>
      )}
    </S.Container>
  )
}
