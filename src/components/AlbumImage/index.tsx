import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../assets/rubel-casas-capa.jpg';

const AlbumImage: React.FC = () => {
  const { width: W } = Dimensions.get('window');
  return (
    <ImageBackground
      resizeMode="cover"
      source={logo}
      style={{
        top: 0,
        width: W,
        height: 300,
        backgroundColor: 'transparent',
      }}>
      <LinearGradient
        colors={['transparent', '#1a2239']}
        locations={[0, 1.4]}
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}></LinearGradient>
    </ImageBackground>
  );
};

export default AlbumImage;
