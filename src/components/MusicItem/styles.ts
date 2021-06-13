import Ant from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 12px;
  flex: 1;
  color: #aaa;
`;

export const Icon = styled(Ant)`
  font-size: 12px;
  color: #aaa;
  margin-right: 10px;
`;
