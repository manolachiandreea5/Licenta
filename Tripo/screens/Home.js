import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateNewTripPopup from '../components/CreateNewTripPopup';
import AddCostPopup from '../components/AddCostPopup'; // Adăugat noul popup
import { Container, Title, SearchInput, SectionTitle, AddButton, PopupButton, PopupOption, styles } from '../components/homeStyles';
import BottomNavMenu from './BottomNavMenu';
import config from './../config'; 
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isOptionPopupVisible, setOptionPopupVisible] = useState(false);
  const [isCreateTripPopupVisible, setCreateTripPopupVisible] = useState(false);
  const [isAddCostPopupVisible, setAddCostPopupVisible] = useState(false);
      const [costs, setCosts] = useState([]);
  const { token } = useContext(AuthContext); 

  const fetchCosts = async () => {
    try {
        const response = await fetch(`${config.BASE_URL}/api/costs`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch costs');
        const data = await response.json();
        setCosts(data);
    } catch (error) {
        console.error('Error fetching costs:', error);
        Alert.alert('Error', 'Failed to fetch costs.');
    }
};

  const handleOptionSelect = (option) => {
    //setModalVisible(false); // Închide modalul principal
    switch (option) {
      case 'Create new trip':
        setModalVisible(false);
        setCreateTripPopupVisible(true);
        break;
      case 'Add cost':
        setModalVisible(false);
        setAddCostPopupVisible(true); // Activează corect popup-ul AddCost
        break;
      default:
        break;
    }
  };

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
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {[
              { icon: 'school-outline', label: 'Add activity' },
              { icon: 'calendar-outline', label: 'Quick plan' },
              { icon: 'cash-outline', label: 'Add cost' },
              { icon: 'briefcase-outline', label: 'Create new trip' },
            ].map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.popupButton}
                onPress={() => handleOptionSelect(option.label)}
              >
                <View style={styles.circle}>
                  <Icon name={option.icon} size={20} color="#fff" />
                </View>
                <Text style={styles.popupText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
      <CreateNewTripPopup
        visible={isCreateTripPopupVisible}
        onClose={() => setCreateTripPopupVisible(false)}
      />
       <AddCostPopup
                visible={isAddCostPopupVisible}
                onClose={() => setAddCostPopupVisible(false)}
                onCostAdded={() => fetchCosts()}
            />


      <BottomNavMenu navigation={navigation} />
    </Container>
  );
};

export default Home;