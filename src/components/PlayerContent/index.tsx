import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
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
      <MusicBackground
        style={{
          shadowColor: '#b969a6',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 1,
          elevation: 20,
        }}
      />

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
        <Icon name="banckward" size={30} />
        <PlayPauseCircle>
          <Icon name="caretright" size={30} />
        </PlayPauseCircle>
        <Icon name="forward" size={30} />
      </MusicControls>
      <MusicControls>
        <Icon name="retweet" size={15} color="#aaa" />
        <Icon name="hearto" size={15} color="#aaa" />
        <Icon name="swap" size={15} color="#aaa" />
      </MusicControls>

      {/* 
      <SocialControls></SocialControls> */}
    </Container>
  );
};

export default PlayerContent;
