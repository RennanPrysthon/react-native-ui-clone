import React from 'react';
import { ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import album from '../../assets/album.jpg';
import {
  Container,
  MusicAuthor,
  MusicIcon,
  MusicInfo,
  MusicPlayPauseButton,
  MusicTitle,
  PushIndicator,
} from './styles';

type Props = Animated.AnimateProps<ViewProps>;

const PlayerStatus: React.FC<Props> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <PushIndicator />
      <MusicIcon source={album} />
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
