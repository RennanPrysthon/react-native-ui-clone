import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 10px 20px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  position: absolute;
  align-items: center;
`;

export const PushIndicator = styled.View`
  height: 2px;
  width: 50px;
  background-color: #ddd;
  position: absolute;
  top: 5px;
  left: 50%;
  right: 50%;
`;

export const PlaylistTitle = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const PlaylistName = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #aaa;
`;

export const MusicBackground = styled.Image`
  margin-top: 20px;
  border-radius: 50px;
  width: 250px;
  height: 250px;
`;

export const MusicTitle = styled.Text`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

export const MusicAuthor = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: #aaa;
`;
export const MusicProgress = styled.View`
  margin-top: 20px;
  background-color: #ddd;
  width: 80%;
  height: 3px;
  flex-direction: row;
`;

export const BarCompleted = styled.View`
  position: relative;
  background-color: #000;
  width: 20%;
  height: 3px;
`;

export const Ball = styled.View`
  top: -5px;
  position: relative;
  background-color: #000;
  width: 15px;
  height: 15px;
  border-radius: 15px;
`;

export const MusicTime = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const Timer = styled.Text``;

export const MusicControls = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const PlayPauseCircle = styled.View`
  background-color: #eee;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;
