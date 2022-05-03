import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { FlatList, FlatListProps } from 'react-native'
import { Movie } from '../../model/Discover'

const MoveList = styled(FlatList as new (props: FlatListProps<Movie>) => FlatList<Movie>).attrs({
  contentContainerStyle: { padding: 12, marginTop: 80 }
})``

export const AnimatedFlatlist = Animated.createAnimatedComponent(MoveList)
