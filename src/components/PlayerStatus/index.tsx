import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  MusicAuthor,
  MusicIcon,
  MusicInfo,
  MusicPlayPauseButton,
  MusicTitle,
  PushIndicator,
} from './styles';

interface Props {
  translateY: Animated.AnimatedValue;
}

const PlayerStatus: React.FC<Props> = ({ translateY }) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [-70, 0, 10],
          outputRange: [0, 1, 1],
        }),
      }}>
      <PushIndicator />
      <MusicIcon />
      <MusicInfo>
        <MusicTitle>Crooked Soul</MusicTitle>
        <MusicAuthor>Dayseeker</MusicAuthor>
      </MusicInfo>
      <MusicPlayPauseButton>
        <Icon name="caretright" size={22} color="#333" />
      </MusicPlayPauseButton>
    </Container>
  );
};

export default PlayerStatus;
