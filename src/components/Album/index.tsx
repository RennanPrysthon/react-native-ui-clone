import React from 'react';
import { AlbumBackground, Container, Title, Year } from './styles';

interface AlbumProps {
  name: string;
  year: string;
  source: any;
}

const Album: React.FC<AlbumProps> = ({ name, year, source }) => {
  return (
    <Container>
      <AlbumBackground source={source} />
      <Title>{name}</Title>
      <Year>{year}</Year>
    </Container>
  );
};

export default Album;
