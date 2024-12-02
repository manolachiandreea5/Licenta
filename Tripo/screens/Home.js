import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Title, SearchInput, SectionTitle, AddButton, PopupButton, PopupOption, styles } from '../components/homeStyles';
import BottomNavMenu from './BottomNavMenu';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
      style={[styles.card, { backgroundColor: trip.color }]}
      onPress={() => console.log(`Navigating to ${trip.city}`)}
    >
      <Text style={styles.cardTitle}>{trip.city}</Text>
      <Text style={styles.cardDates}>{trip.dates}</Text>
    </TouchableOpacity>
  );

  const renderTripCard2 = (trip) => (
    <TouchableOpacity
      style={[styles.card2, { backgroundColor: trip.color }]}
      onPress={() => console.log(`Viewing past trip: ${trip.city}`)}
    >
      <Text style={styles.cardTitle}>{trip.city}</Text>
      <Text style={styles.cardDates}>{trip.dates}</Text>
    </TouchableOpacity>
  );

  return (
    <Container>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        marginVertical: 8,
      }}>
        <Icon name="menu" size={24} color="black" />
        <Title style={styles.title}>Home</Title>
        <View style={{ width: 24 }} />
      </View>
      <SearchInput paddingLeft={16} placeholder="Search your trip" placeholderTextColor="#898697" />
      <SectionTitle paddingHorizontal={8}>Future trips</SectionTitle>
      <FlatList
        data={trips.future}
        renderItem={({ item }) => renderTripCard(item)}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
      />
      <SectionTitle paddingHorizontal={8}>Past trips</SectionTitle>
      <FlatList
        data={trips.past}
        renderItem={({ item }) => renderTripCard2(item)}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={{ marginBottom: 100 }}
      />
      <AddButton onPress={() => setModalVisible(true)}>
        <Icon name="add" size={25} color="black" />
      </AddButton>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay} // Aceasta va ocupa tot ecranul
          activeOpacity={1} // Evită efectul de opacitate
          onPress={() => setModalVisible(false)} // Închide modalul când se apasă în afară
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.popupButton}
              onPress={() => console.log('Add activity')}
            >
              <View style={styles.circle}>
                <Icon name="school-outline" size={20} color="#fff" />
              </View>
              <Text style={styles.popupText}>Add activity</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.popupButton}
              onPress={() => console.log('Quick plan')}
            >
              <View style={[styles.circle]}>
                <Icon name="calendar-outline" size={20} color="#fff" />
              </View>
              <Text style={styles.popupText}>Quick plan</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.popupButton}
              onPress={() => console.log('Add cost')}
            >
              <View style={[styles.circle]}>
                <Icon name="cash-outline" size={20} color="#fff" />
              </View>
              <Text style={styles.popupText}>Add cost</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.popupButton}
              onPress={() => console.log('Create new trip')}
            >
              <View style={[styles.circle]}>
                <Icon name="briefcase-outline" size={20} color="#fff" />
              </View>
              <Text style={styles.popupText}>Create new trip</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <BottomNavMenu navigation={navigation} />
    </Container>
  );
};

export default Home;