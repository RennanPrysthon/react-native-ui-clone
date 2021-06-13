import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import music from '../../assets/album.jpg';
import {
  Ball,
  BarCompleted,
  Container,
  MusicAuthor,
  MusicBackground,
  MusicControls,
  MusicProgress,
  MusicTime,
  MusicTitle,
  PlaylistName,
  PlaylistTitle,
  PlayPauseCircle,
  PushIndicator,
  Timer,
} from './styles';

interface Props {
  translateY: Animated.AnimatedValue;
}

const PlayerContent: React.FC<Props> = ({ translateY }) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [-360, 0, 160],
          outputRange: [1, 0, 0],
        }),
      }}>
      <PushIndicator />

      <PlaylistTitle>Now playing</PlaylistTitle>
      <PlaylistName>My playlist</PlaylistName>

      <MusicBackground source={music} resizeMode="cover" />

      <MusicTitle>Crooked Soul</MusicTitle>
      <MusicAuthor>Dayseeker</MusicAuthor>

      <MusicProgress>
        <BarCompleted />
        <Ball />
      </MusicProgress>

      <MusicTime>
        <Timer>1:05</Timer>
        <Timer>3:35</Timer>
      </MusicTime>

      <MusicControls>
        <TouchableOpacity>
          <Icon name="banckward" size={30} />
        </TouchableOpacity>
        <PlayPauseCircle>
          <TouchableOpacity>
            <Icon name="caretright" size={30} />
          </TouchableOpacity>
        </PlayPauseCircle>
        <TouchableOpacity>
          <Icon name="forward" size={30} />
        </TouchableOpacity>
      </MusicControls>
      <MusicControls>
        <TouchableOpacity>
          <Icon name="retweet" size={15} color="#aaa" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="hearto" size={15} color="#aaa" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="swap" size={15} color="#aaa" />
        </TouchableOpacity>
      </MusicControls>
    </Container>
  );
};

export default PlayerContent;
