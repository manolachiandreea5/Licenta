import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard ,  ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../context/AuthContext';
import config from './../config';

const { width, height } = Dimensions.get('window'); 

const AddCostPopup = ({ visible, onClose }) => {
    const { token } = useContext(AuthContext);

    const [trips, setTrips] = useState([]);
    const [selectedTrip, setSelectedTrip] = useState('');
    const [costType, setCostType] = useState('');
    const [amount, setAmount] = useState('');
    const [groupType, setGroupType] = useState('');

    const resetForm = () => {
        setSelectedTrip('');
        setCostType('');
        setAmount('');
        setGroupType('');
    };
    // Lista fixă de tipuri de cost
    const costTypes = [
        { label: 'Transport', value: 'Transport' },
        { label: 'Hotel', value: 'Hotel' },
        { label: 'Restaurant', value: 'Restaurant' },
        { label: 'Shopping', value: 'Shopping' },
        { label: 'Activity', value: 'Activity' }
    ];
    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await fetch(`${config.BASE_URL}/api/trips`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                //console.log('Trips received in frontend:', data);
                setTrips(data);  // Salvează trip-urile în starea locală
            } catch (error) {
                console.error('Error fetching trips:', error);
            }
        };

        if (visible) {
            fetchTrips();
        }
    }, [visible, token]);

    const handleSave = async () => {
        let missingFields = [];

        if (!selectedTrip) missingFields.push('Trip');
        if (!costType) missingFields.push('Cost Type');
        if (!amount) missingFields.push('Amount');
        if (!groupType) missingFields.push('Group Type');

        // Dacă există câmpuri lipsă, afișează exact care lipsesc
        if (missingFields.length > 0) {
            console.error(`Lipsesc câmpuri obligatorii: ${missingFields.join(', ')}`);
            alert(`Lipsesc câmpuri obligatorii: ${missingFields.join(', ')}`);
            return;
        }

        const newCost = {
            tripId: selectedTrip,
            type: costType,
            amount: parseFloat(amount),
            groupType
        };

        try {
            const res = await fetch(`${config.BASE_URL}/api/add-cost`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newCost),
            });

            const data = await res.json();
            console.log('Cost saved:', data);

            if (res.ok) {
                resetForm();
                onClose();
            }
        } catch (error) {
            console.error('Error saving cost:', error);
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true} >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                <KeyboardAvoidingView
                        style={styles.keyboardContainer} behavior="height"
                    >
                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            keyboardShouldPersistTaps="handled"
                        >
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={styles.popupContainer}>
                            <Text style={styles.title}>Add Cost</Text>

                            {/* Select Trip */}
                            <Text style={styles.label}>Select Trip</Text>
                            <Picker
                                selectedValue={selectedTrip}
                                transparent={true} 
                                onValueChange={(itemValue) => setSelectedTrip(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Select trip" value="" color='black'/>
                                {trips.map((trip) => (
                                    <Picker.Item key={trip._id} label={trip.name || 'Unnamed Trip'} value={trip._id} color='black' />
                                ))}
                            </Picker>

                            {/* Select Type of Cost */}
                            <Text style={styles.label}>Type of Cost</Text>
                            <Picker
                                selectedValue={costType}
                                onValueChange={(itemValue) => setCostType(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Select type" value="" color='black'/>
                                {costTypes.map((item, index) => (
                                    <Picker.Item key={index} label={item.label} value={item.value} color='black' />
                                ))}
                            </Picker>

                            {/* Amount */}
                            <Text style={styles.label}>Amount</Text>
                            <TextInput
                                color='black'
                                style={styles.input}
                                placeholder="Enter amount"
                                placeholderTextColor="gray"
                                keyboardType="numeric"
                                value={amount}
                                onChangeText={setAmount}
                            />

                            {/* Single or Group */}
                            <Text style={styles.label}>Single/Group</Text>
                            <View style={styles.toggleContainer}>
                                <TouchableOpacity
                                    style={[styles.toggleButton, groupType === 'Single' && styles.activeToggleButton]}
                                    onPress={() => setGroupType('Single')}
                                >
                                    <Text style={[styles.toggleButtonText, groupType === 'Single' && styles.activeToggleText]}>Single</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.toggleButton, groupType === 'Group' && styles.activeToggleButton]}
                                    onPress={() => setGroupType('Group')}
                                >
                                    <Text style={[styles.toggleButtonText, groupType === 'Group' && styles.activeToggleText]}>Group</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Save Button */}
                            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                    </ScrollView>
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

    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 12,
    },

    toggleButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        marginHorizontal: 5,
    },

    activeToggleButton: {
        backgroundColor: '#6d5dfc',
        borderColor: '#6d5dfc',
    },

    toggleButtonText: {
        fontSize: 16,
        color: '#555',
    },

    activeToggleText: {
        color: 'white',
        fontWeight: 'bold',
    },


    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupContainer: {
        width: width * 0.9, // Proporțional cu ecranul
        //maxHeight: height * 0.9, // Adaptează înălțimea
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
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 12,
    },
    saveButton: {
        backgroundColor: '#6d5dfc',
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
});

export default AddCostPopup;
