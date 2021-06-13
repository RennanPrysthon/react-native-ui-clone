import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  top: 0;
  padding: 10px 30px;
  height: 100px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

export const PushIndicator = styled.View`
  height: 3px;
  width: 50px;
  background-color: #ddd;
  position: absolute;
  top: 5px;
  left: 50%;
  right: 50%;
`;

export const MusicInfo = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const MusicIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const MusicTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
export const MusicAuthor = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #aaa;
`;

export const MusicPlayPauseButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-color: #333;
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;
