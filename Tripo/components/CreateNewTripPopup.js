import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-modern-datepicker';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../context/AuthContext';
import config from './../config';

const { width, height } = Dimensions.get('window');

const CreateNewTripPopup = ({ visible, onClose }) => {
  const { token } = useContext(AuthContext);

  const [tripName, setTripName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  const [selectedTransport, setSelectedTransport] = useState('');
  const [transportOptions, setTransportOptions] = useState([]);

  const [availableGoals, setAvailableGoals] = useState([]);


  const [selectedGoals, setSelectedGoals] = useState([]);
  const tripGoals = [
    { name: "Food", icon: "fast-food-outline", id: "674ee978a29c0ef21f758374" },
    { name: "Short break", icon: "walk-outline", id: "674eea0aa29c0ef21f75837b" },
    { name: "Holiday", icon: "sunny-outline", id: "674eea12a29c0ef21f75837d" },
    { name: "Shopping", icon: "cart-outline", id: "674eea1ca29c0ef21f75837f" },
    { name: "Road trip", icon: "car-outline", id: "674eea25a29c0ef21f758381" },
    { name: "City break", icon: "business-outline", id: "674eea2fa29c0ef21f758383" },
    { name: "Adventure", icon: "airplane-outline", id: "674eea38a29c0ef21f758385" },
    { name: "Romantic", icon: "heart-outline", id: "674eea42a29c0ef21f758387" },
    { name: "Camping", icon: "bonfire-outline", id: "674eea4aa29c0ef21f758389" },
    { name: "Cruise", icon: "boat-outline", id: "674eea53a29c0ef21f75838b" },
    { name: "Special event", icon: "star-outline", id: "674eea5ea29c0ef21f75838d" },
    { name: "Business", icon: "briefcase-outline", id: "674eea67a29c0ef21f75838f" },
  ];

  const resetForm = () => {
    setTripName('');
    setStartDate(new Date());
    setEndDate(new Date());
    setSelectedTransport('');
    setSelectedGoals([]);
    setStartDatePickerVisible(false);
    setEndDatePickerVisible(false);
  };

  // Fetch transport options from backend
  useEffect(() => {
    fetch(`${config.BASE_URL}/api/transports`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setTransportOptions(data))
      .catch((err) => console.error(err));

    fetch(`${config.BASE_URL}/api/goals`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setAvailableGoals(data)) // Setează scopurile disponibile
      .catch((err) => console.error(err));
  }, [token]);

  const toggleGoalSelection = (goalId) => {
    setSelectedGoals((prevGoals) =>
      prevGoals.includes(goalId)
        ? prevGoals.filter((id) => id !== goalId)
        : [...prevGoals, goalId]
    );
  };

  const handleSave = async () => {
    if (!tripName || !startDate || !endDate || !selectedTransport) {
      console.error('Lipsesc câmpuri obligatorii!');
      return;
    }


    const newTrip = {
      name: tripName,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      transport: selectedTransport,
      tripGoals: selectedGoals.map((goalId) => ({ _id: goalId })), // Mapare corectă
    };

    console.log('Obiect trimis la server:', newTrip);

    try {
      const res = await fetch(`${config.BASE_URL}/api/trips`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newTrip),
      });

      if (res.ok) {
        const data = await res.json();
        console.log('Trip saved:', data);
        resetForm();
        onClose(); // Închide modalul după salvare
      } else {
        alert('A apărut o eroare la salvarea călătoriei.');
      }
    } catch (error) {
      console.error('Eroare la salvarea trip-ului:', error);
    }

  };


  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          resetForm();
          onClose();
        }}
      >
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior="padding"
          >
            <TouchableWithoutFeedback onPress={() => { }} >
              <View style={styles.popupContainer}>
                <Text style={styles.title}>Create trip</Text>
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                  {/* Trip Name */}
                  <Text style={styles.label}>Trip name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Trip name"
                    placeholderTextColor="gray"
                    value={tripName}
                    onChangeText={setTripName}
                  />

                  {/* Start Date */}
                  <Text style={styles.label}>Start Date</Text>
                  <TouchableOpacity
                    style={styles.dateButton}
                    onPress={() => setStartDatePickerVisible(true)}
                  >
                    <Text style={styles.dateText}>
                      {startDate && !isNaN(startDate) ? startDate.toDateString() : 'Select Start Date'}
                    </Text>
                  </TouchableOpacity>

                  {isStartDatePickerVisible && (
                    <DatePicker
                      mode="calendar"
                      onDateChange={(dateString) => {
                        //console.log('Raw Selected Date:', dateString); // Log-ul valorii brute
                        const dateParts = dateString.split('/'); // Desparte string-ul după `/`
                        const validDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // Creează un obiect Date

                        if (!isNaN(validDate)) {
                          setStartDate(validDate); // Setează data validă
                          //console.log('Valid Date Selected:', validDate);
                        } else {
                          //console.error('Invalid date selected:', dateString);
                        }
                        setStartDatePickerVisible(false);
                      }}
                    />
                  )}




                  {/* End Date */}
                  <Text style={styles.label}>End Date</Text>
                  <TouchableOpacity
                    style={styles.dateButton}
                    onPress={() => setEndDatePickerVisible(true)}
                  >
                    <Text style={styles.dateText}>
                      {endDate && !isNaN(endDate) ? endDate.toDateString() : 'Select End Date'}
                    </Text>
                  </TouchableOpacity>

                  {isEndDatePickerVisible && (
                    <DatePicker
                      mode="calendar"
                      onDateChange={(dateString) => {
                        //console.log('Raw Selected Date:', dateString); // Log-ul valorii brute
                        const dateParts = dateString.split('/'); // Desparte string-ul după `/`
                        const validDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // Creează un obiect Date

                        if (!isNaN(validDate)) {
                          setEndDate(validDate); // Setează data validă
                          //console.log('Valid Date Selected:', validDate);
                        } else {
                          console.error('Invalid date selected:', dateString);
                        }
                        setEndDatePickerVisible(false);
                      }}
                    />
                  )}


                  {/* Transport */}
                  <Text style={styles.label}>Transport type</Text>
                  <Picker
                    selectedValue={selectedTransport}
                    onValueChange={(itemValue) => setSelectedTransport(itemValue)}
                    style={styles.picker} // Stil aplicat Picker-ului
                    itemStyle={styles.pickerItem} // Stil pentru fiecare element (doar iOS)
                  >
                    <Picker.Item label="Select transport type" value="" />
                    {transportOptions.map((transport) => (
                      <Picker.Item key={transport._id} label={transport.name} value={transport._id} />
                    ))}
                  </Picker>



                  {/* Trip Goals */}
                  <Text style={styles.subTitle}>Trip goals</Text>
                  <View style={styles.tripGoalsContainer}>
                    {tripGoals.map((goal, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.goalButton,
                          selectedGoals.includes(goal.id) && styles.selectedGoalButton,
                        ]}
                        onPress={() => toggleGoalSelection(goal.id)}
                      >
                        <Icon
                          name={goal.icon}
                          size={18}
                          color={selectedGoals.includes(goal.id) ? 'white' : 'black'}
                          style={styles.goalIcon}
                        />
                        <Text
                          style={[
                            styles.goalText,
                            selectedGoals.includes(goal.id) && { color: 'white' },
                          ]}
                        >
                          {goal.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>

                {/* Save Button */}
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: width * 0.9, // Proporțional cu ecranul
    maxHeight: height * 0.9, // Adaptează înălțimea
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 24,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4a4a4a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    fontSize: 14,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tripGoalsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  goalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
    margin: 4,
  },
  goalIcon: {
    marginRight: 8,
  },
  goalText: {
    fontSize: 14,
    color: 'black',
  },
  saveButton: {
    backgroundColor: '#6d5dfc', // O nuanță mai vie
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontSize: 13, // Font mai consistent
    color: '#333',
    marginBottom: 8,
    marginLeft: 8,
  },
  selectedGoalButton: {
    backgroundColor: '#8d72ff',
    borderColor: '#8d72ff',
  },
  selectedDate: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
  },
  dateButton: {
    backgroundColor: '#eef0f3', // Fundal gri deschis
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  dateText: {
    color: '#555', // Text gri
    fontSize: 14,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 16,
    marginBottom: 12,
    fontSize: 14,
    color: '#555', // Culoare text
    borderColor: '#8d72ff',
  },
  pickerItem: {
    fontSize: 14,
    color: '#333', // Culoarea textului din meniul derulant (iOS)
  },


});

export default CreateNewTripPopup;
