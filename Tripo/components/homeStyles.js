import styled from 'styled-components/native';
import { StyleSheet  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Colors
export const Colors = {
  primary: '#8572FF',
  black: 'black',
  white: 'white',
};

const { primary, black, white } = Colors;

// Styled-components
// export const Container = styled.View`
//   flex: 1;
//   background-color: ${white};
//   padding: 16px;
// `;

export const Container = styled(SafeAreaView)`
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
  margin-top: 4px;
  margin-bottom: 4px;
  padding-horizontal: 8px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #8572FF;
  position: absolute;
  bottom: 80px;
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


export const PopupButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #8572FF;
  padding: 12px;
  margin: 8px;
  border-radius: 8px;
`;

export const PopupOption = styled.View`
  flex-direction: row;
  align-items: center;
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    alignItems: 'flex-start',
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  popupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8572FF', // Culoarea fundalului pentru cerc
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginLeft:16,
  },
  
  popupText: {
    fontSize: 16,
    color: '#000', // Culoarea textului
  },
});

export const BottomNavContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: white;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #ddd;
  adding-horizontal: 16px;
  z-index: 10;
`;
export const BottomNavContainer22 = styled(SafeAreaView)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 75px;
  background-color: white;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #ddd;
  padding-horizontal: 16px;
  z-index: 10;
`;
export const NavItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;