import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { BlurView } from 'expo-blur'

export const Container = styled.View`
  flex: 1;
`
const Header = styled.View`
  width: 100%;
  position: absolute;
  z-index: 1;
`
export const AnimatedHeader = Animated.createAnimatedComponent(Header)

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
`
export const BlurHeader = styled(BlurView).attrs({
  tint: 'light',
  intensity: 100
})`
  height: 90px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
`
