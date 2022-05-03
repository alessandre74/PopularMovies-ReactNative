import React from 'react'
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

import { Movie } from '../../model/Discover'
import { Header } from './Header'
import { listItem } from './ListItem'
import { Separator } from './Separator'

import * as S from './styles'

type Props = {
  movies: Movie[]
  onScroll?: ((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined
}

export function List({ movies, onScroll }: Props) {
  return (
    <S.AnimatedFlatlist
      data={movies}
      onScroll={onScroll}
      keyExtractor={item => String(item.id)}
      renderItem={listItem}
      ListHeaderComponent={Header}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    />
  )
}
