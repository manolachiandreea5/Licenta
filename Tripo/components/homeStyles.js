import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

// Colors
export const Colors = {
  primary: '#8572FF',
  black: 'black',
  white: 'white',
};

const { primary, black, white } = Colors;

// Styled-components
export const Container = styled.View`
  flex: 1;
  background-color: ${white};
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

export const SearchInput = styled.TextInput`
  background-color: #E7E3FF;
  border-radius: 28px;
  padding: 8px;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-vertical: 8px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #8572FF;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  shadow-color: black;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  shadow-offset: 0px 2px;
`;

// Additional styles for FlatList items and cards
export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 10,
    shadowColor: black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    aspectRatio: 1.25, 
  },
  card2: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 10,
    shadowColor: black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDates: {
    fontSize: 14,
    color: '#666',
  },
});
