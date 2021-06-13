import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import AlbumImage from '../components/AlbumImage';
import PlayerContent from '../components/PlayerContent';
import PlayerStatus from '../components/PlayerStatus';
import { BottomPlayer, Container } from './styles';

export default function Home() {
  const { height: H, width: W } = Dimensions.get('window');
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );
  const onHandlerStateChanged = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;
      if (translationY * -1 >= 10) {
        opened = true;
      } else {
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? -380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? -380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <Container>
      <AlbumImage />

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <BottomPlayer
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-380, 0, 380],
                  outputRange: [-H + 200, 0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <PlayerStatus translateY={translateY} />
          <PlayerContent translateY={translateY} />
        </BottomPlayer>
      </PanGestureHandler>
    </Container>
  );
}
