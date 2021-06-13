import React from 'react';
import { Container, Icon, Title } from './styles';

interface MusicItemProps {
  name: string;
}

const MusicItem: React.FC<MusicItemProps> = ({ name }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Icon name="hearto" size={16} />
      <Icon name="ellipsis1" size={16} />
    </Container>
  );
};

export default MusicItem;
