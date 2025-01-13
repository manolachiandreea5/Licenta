import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomNavContainer22, NavItem, BottomNavContainer } from '../components/homeStyles'; // Importă componentele stilizate

const BottomNavMenu = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const routeName = navigation.getState().routes[navigation.getState().index].name;
  return (
    <BottomNavContainer edges={['bottom']} >
      <NavItem onPress={() => navigation.navigate('Home')}>
        <Icon name={routeName === 'Home' ? 'map' : 'map-outline'} size={24} color="black" />
        <Text style={{ fontSize: 12, marginTop: 4, color: 'black' }}>Home</Text>
      </NavItem>

      <NavItem onPress={() => navigation.navigate('MyTrips')}>
        <Icon name="briefcase-outline" size={24} color="black" />
        <Text style={{ fontSize: 12, marginTop: 4, color: 'black' }}>My trips</Text>
      </NavItem>

      <NavItem onPress={() => navigation.navigate('Calendar')}>
        <Icon name="calendar-outline" size={24} color="black" />
        <Text style={{ fontSize: 12, marginTop: 4, color: 'black' }}>Calendar</Text>
      </NavItem>

      <NavItem onPress={() => navigation.navigate('BudgetPage')}>
        <Icon name={routeName === 'BudgetPage' ? 'cash' : 'cash-outline'} size={24} color="black" />
        <Text style={{ fontSize: 12, marginTop: 4, color: 'black' }}>Budget</Text>
      </NavItem>

      <NavItem onPress={() => navigation.navigate('Profile')}>
        <Icon name="person-outline" size={24} color="black" />
        <Text style={{ fontSize: 12, marginTop: 4, color: 'black' }}>Profile</Text>
      </NavItem>
    </BottomNavContainer>
  );
};


export default BottomNavMenu;
