import React from 'react'
import { ListRenderItemInfo } from 'react-native'

import Entypo from 'react-native-vector-icons/Ionicons'

import { Movie } from '../../../model/Discover'

import * as S from './styles'

type Props = {
  data: Movie
}

function ListItem({ data }: Props) {
  const urlPath = `https://image.tmdb.org/t/p/w500${data.poster_path}`
  return (
    <S.Container key={data.id}>
      {urlPath && <S.Image source={{ uri: urlPath }} resizeMode="cover" />}

      <S.Content>
        <S.Title>{data.title}</S.Title>

        <S.ContentOverView>
          <S.OverView ellipsizeMode="tail" numberOfLines={4}>
            {data.overview}
          </S.OverView>
        </S.ContentOverView>

        <S.ContentAverage>
          <Entypo name="star" size={16} color="orange" />
          <S.VoteAverage>{data.vote_average.toFixed(1)}</S.VoteAverage>
        </S.ContentAverage>
      </S.Content>
    </S.Container>
  )
}

export function listItem({ item }: ListRenderItemInfo<Movie>) {
  return <ListItem data={item} />
}
