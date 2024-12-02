import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CreateNewTripPopup = ({ visible, onClose }) => {
  const tripGoals = [ 
    { name: "Food", icon: "fast-food-outline" },
    { name: "Short break", icon: "walk-outline" },
    { name: "Holiday", icon: "sunny-outline" },

    { name: "Shopping", icon: "cart-outline" },
    { name: "Road trip", icon: "car-outline" },
    { name: "City break", icon: "business-outline" },


    { name: "Adventure", icon: "airplane-outline" },
    
    { name: "Romantic", icon: "heart-outline" },
    { name: "Camping", icon: "bonfire-outline" },
    { name: "Cruise", icon: "boat-outline" },
    { name: "Special event", icon: "star-outline" },
    { name: "Business", icon: "briefcase-outline" },
  ];

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <Text style={styles.title}>Create trip</Text>

          <Text style={styles.label}>Trip name</Text>
          <TextInput style={styles.input} placeholder="Trip name" />

          <Text style={styles.label}>Select date</Text>
          <TextInput style={styles.input} placeholder="Select date" />

          <Text style={styles.label}>Transport type</Text>
          <TextInput style={styles.input} placeholder="Select transport type" />
          
          <Text style={styles.subTitle}>Trip goals</Text>
          <View style={styles.tripGoalsContainer}>
            {tripGoals.map((goal, index) => (
              <TouchableOpacity key={index} style={styles.goalButton}>
                <Icon name={goal.icon} size={18} color="black" style={styles.goalIcon} />
                <Text style={styles.goalText}>{goal.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={onClose}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
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
    backgroundColor: '#8572FF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontSize: 12,
    color: "#000", // Culoare gri deschis
    marginBottom: 4, // Spațiu între etichetă și input
    marginLeft: 4,  // Margine stângă pentru aliniere
  },
});

export default CreateNewTripPopup;
