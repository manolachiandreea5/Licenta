import React from 'react';
import { View, FlatList, Text, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Container, Title, SearchInput, SectionTitle, AddButton, styles } from '../components/homeStyles'; // Importă stilurile
import BottomNavMenu from './BottomNavMenu';

const Home = ({navigation }) => {
  const trips = {
    future: [
      { id: 1, city: 'Turin', dates: '15-19 September', color: '#FFD7D7' },
      { id: 2, city: 'Milan', dates: '25-30 October', color: '#D7EFFF' },
      { id: 3, city: 'Valencia', dates: '3-9 November', color: '#FFFDD7' },
      { id: 4, city: 'Vienna', dates: '11-19 December', color: '#D7FFD7' },
    ],
    past: [
      { id: 5, city: 'Paris', dates: '17-20 July', color: '#FFD7D7' },
      { id: 6, city: 'Berlin', dates: '5-10 March', color: '#FFFDD7' },
      { id: 7, city: 'Budapest', dates: '11-19 January', color: '#D7FFD7' },
    ],
  };

  const renderTripCard = (trip) => (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: trip.color },
      ]}
      onPress={() => {
        console.log(`Navigating to ${trip.city}`);
        // Adaugă navigația sau funcționalitatea dorită aici
      }}
    >
      <Text style={styles.cardTitle}>{trip.city}</Text>
      <Text style={styles.cardDates}>{trip.dates}</Text>
    </TouchableOpacity>
  );
  const renderTripCard2 = (trip) => (
    <TouchableOpacity
      style={[
        styles.card2,
        { backgroundColor: trip.color },
      ]}
      onPress={() => {
        console.log(`Viewing past trip: ${trip.city}`);
        // Adaugă navigația sau funcționalitatea dorită aici
      }}
    >
      <Text style={styles.cardTitle}>{trip.city}</Text>
      <Text style={styles.cardDates}>{trip.dates}</Text>
    </TouchableOpacity>
  );

  return (
    <Container>
    <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 8,
          marginVertical: 8,
        }}
      >
        <View>
          <Icon name="menu" size={24} color="black" />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Title style={{ fontSize: 20, fontWeight: 'bold' }}>Home</Title>
        </View>
        <View style={{ width: 24 }} />
      </View>
      <SearchInput  paddingLeft={16} placeholder="Search your trip" placeholderTextColor="#898697" />
      <SectionTitle paddingHorizontal= {8}>Future trips</SectionTitle>
      <FlatList
        data={trips.future}
        renderItem={({ item }) => renderTripCard(item)}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
      />
      <SectionTitle  paddingHorizontal= {8}>Past trips</SectionTitle>
      <FlatList
        data={trips.past}
        renderItem={({ item }) => renderTripCard2(item)}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={{ marginBottom: 100 }}
      />
      <AddButton>
        <Icon name="add" size={25} color="black" />
      </AddButton>
      <BottomNavMenu navigation={navigation} />
    </Container>
  );
};

export default Home;
