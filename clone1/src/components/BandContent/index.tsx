import React from 'react';
import album1 from '../../assets/album.jpg';
import Album from '../Album';
import MusicItem from '../MusicItem';
import {
  AlbumList,
  Container,
  Content,
  GroupName,
  Label,
  MusicList,
} from './styles';

const BandContent: React.FC = () => {
  return (
    <Container>
      <GroupName>Dayseeker</GroupName>

      <Label>Albums</Label>

      <AlbumList horizontal={true} showsHorizontalScrollIndicator={false}>
        <Album name="Sleepttalk" year="2019" source={album1} />
        <Album name="Sleepttalk" year="2019" source={album1} />
        <Album name="Sleepttalk" year="2019" source={album1} />
      </AlbumList>

      <Content>
        <Label>Most popular</Label>
        <Label>All</Label>
      </Content>

      <MusicList>
        <MusicItem name="Starving To Be Empty" />
        <MusicItem name="Crooked Soul" />
      </MusicList>
    </Container>
  );
};

export default BandContent;
