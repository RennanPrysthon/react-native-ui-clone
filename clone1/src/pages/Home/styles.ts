import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { width: W, height: H } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #1a2239;
  position: relative;
`;

export const BottomPlayer = styled(Animated.View)`
  flex: 1;
  width: ${W}px;
  height: ${H - 100}px;
  background-color: #fff;
  position: absolute;
  bottom: ${-H + 200}px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  position: absolute;
`;
