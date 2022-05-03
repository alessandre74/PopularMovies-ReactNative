import React from 'react'
import { ActivityIndicator } from 'react-native'

import * as S from './styles'

export function Loading() {
  return (
    <S.Container>
      <S.Fetching>Fetching</S.Fetching>
      <ActivityIndicator size="small" color="#0000ff" />
    </S.Container>
  )
}
