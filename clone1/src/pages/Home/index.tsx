import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import AlbumImage from '../../components/AlbumImage';
import BandContent from '../../components/BandContent';
import PlayerContent from '../../components/PlayerContent';
import PlayerStatus from '../../components/PlayerStatus';
import { BottomPlayer, Container } from './styles';

export default function Home() {
  const { height: H } = Dimensions.get('window');
  let offset = 0;
  const translateY = useSharedValue(0);

  const handleGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.startY = translateY.value;
    },
    onActive(event, ctx: any) {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd(event, ctx) {
      offset += event.translationY;
      let opened = false;

      if (event.translationY * -1 >= 10) {
        opened = true;
      } else {
        translateY.value = withTiming(offset);
        offset = 0;
      }

      translateY.value = withTiming(opened ? -380 : 0);
    },
  });

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [-380, 0, 380],
            [-H + 200, 0, 1],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const opacityDisapearStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(
        interpolate(translateY.value, [-50, 10], [0, 1], Extrapolate.CLAMP)
      ),
    };
  });

  const opacityApearStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(
        interpolate(translateY.value, [-70, 10], [1, 0], Extrapolate.CLAMP)
      ),
    };
  });

  return (
    <Container>
      <AlbumImage />
      <BandContent />
      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <BottomPlayer style={positionStyle}>
          <PlayerStatus style={opacityDisapearStyle} />
          <PlayerContent style={opacityApearStyle} />
        </BottomPlayer>
      </PanGestureHandler>
    </Container>
  );
}
