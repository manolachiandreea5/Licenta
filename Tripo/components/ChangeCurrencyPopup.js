// // import React, { useState, useEffect } from 'react';
// // import { View, Text, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';

// // const ChangeCurrencyPopup = ({ visible, onClose, onCurrencyChange }) => {
// //     const [loading, setLoading] = useState(true);
// //     const [exchangeRates, setExchangeRates] = useState({});
// //     const [selectedCurrency, setSelectedCurrency] = useState('RON');
// //     const [amount, setAmount] = useState(0);
// //     const [exchangeRate, setExchangeRate] = useState(1);

// //     useEffect(() => {
// //         const fetchLocationAndRates = async () => {
// //             try {
// //                 setLoading(true);
                
// //                 // Fetch user's location and currency
// //                 const locationResponse = await fetch('https://ipapi.co/json/');
// //                 const locationData = await locationResponse.json();
// //                 const userCurrency = locationData.currency || 'RON';
// //                 setSelectedCurrency(userCurrency);

// //                 // Fetch exchange rates
// //                 const response = await fetch('https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/USD');
                
// //                 if (!response.ok) {
// //                     throw new Error(`Failed with status: ${response.status}`);
// //                 }

// //                 const data = await response.json();
// //                 if (data.conversion_rates) {
// //                     setExchangeRates(data.conversion_rates);
// //                     setExchangeRate(data.conversion_rates[userCurrency]);
// //                 } else {
// //                     throw new Error('Invalid data received from API');
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching data:', error);
// //                 Alert.alert("Error", `Failed to fetch currency data. Error: ${error.message}. Using default currency (RON).`);
// //                 setSelectedCurrency('RON'); 
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         if (visible && Object.keys(exchangeRates).length === 0) {
// //             fetchLocationAndRates();
// //         }
// //     }, [visible]);

// //     const handleCurrencySelect = (currency) => {
// //         setSelectedCurrency(currency);
// //         setExchangeRate(exchangeRates[currency]);
// //     };

// //     const handleSave = () => {
// //         onCurrencyChange(selectedCurrency);
// //         onClose();
// //     };

// //     const convertCurrency = () => {
// //         if (isNaN(amount) || isNaN(exchangeRate) || exchangeRate === 0) {
// //             return "Invalid Amount";
// //         }
// //         let result = (amount / exchangeRate).toFixed(2);
// //         return result;
// //     };

// //     return (
// //         <Modal visible={visible} transparent={true} animationType="slide">
// //             <TouchableWithoutFeedback onPress={onClose}>
// //                 <View style={styles.overlay}>
// //                     <TouchableWithoutFeedback>
// //                         <View style={styles.popupContainer}>
// //                             <Text style={styles.title}>Change Currency</Text>
// //                             <Text style={styles.label}>Select Currency</Text>
// //                             {loading ? (
// //                                 <Text>Loading currencies...</Text>
// //                             ) : (
// //                                 <Picker
// //                                     selectedValue={selectedCurrency}
// //                                     onValueChange={handleCurrencySelect}
// //                                     style={styles.picker}
// //                                 >
// //                                     {Object.keys(exchangeRates).map((currency) => (
// //                                         <Picker.Item key={currency} label={currency} value={currency} />
// //                                     ))}
// //                                 </Picker>
// //                             )}

// //                             {/* Convert Currency Button */}
// //                             <Text style={styles.label}>Converted Amount: {convertCurrency()} {selectedCurrency}</Text>

// //                             <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
// //                                 <Text style={styles.saveButtonText}>Save</Text>
// //                             </TouchableOpacity>
// //                         </View>
// //                     </TouchableWithoutFeedback>
// //                 </View>
// //             </TouchableWithoutFeedback>
// //         </Modal>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     overlay: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //     },
// //     popupContainer: {
// //         width: '90%',
// //         backgroundColor: 'white',
// //         borderRadius: 15,
// //         paddingVertical: 24,
// //         paddingHorizontal: 16,
// //         shadowColor: '#000',
// //         shadowOffset: { width: 0, height: 4 },
// //         shadowOpacity: 0.3,
// //         shadowRadius: 5,
// //         elevation: 10,
// //     },
// //     title: {
// //         fontSize: 20,
// //         fontWeight: '600',
// //         marginBottom: 20,
// //         textAlign: 'center',
// //         color: '#4a4a4a',
// //     },
// //     label: {
// //         fontSize: 14,
// //         fontWeight: 'bold',
// //         marginBottom: 8,
// //     },
// //     picker: {
// //         borderWidth: 1,
// //         borderColor: '#ddd',
// //         borderRadius: 8,
// //         marginBottom: 12,
// //     },
// //     saveButton: {
// //         backgroundColor: '#6d5dfc',
// //         borderRadius: 8,
// //         padding: 12,
// //         marginTop: 16,
// //         alignItems: 'center',
// //         shadowColor: '#000',
// //         shadowOffset: { width: 0, height: 2 },
// //         shadowOpacity: 0.25,
// //         shadowRadius: 4,
// //         elevation: 5,
// //     },
// //     saveButtonText: {
// //         color: 'white',
// //         fontWeight: 'bold',
// //         fontSize: 16,
// //     },
// // });

// // export default ChangeCurrencyPopup;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const ChangeCurrencyPopup = ({ visible, onClose, onCurrencyChange }) => {
//     const [loading, setLoading] = useState(true);
//     const [exchangeRates, setExchangeRates] = useState({});
//     const [selectedCurrency, setSelectedCurrency] = useState('RON');

//     useEffect(() => {
//         const fetchLocationAndRates = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch('https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/RON');
//                 const data = await response.json();
//                 if (data.conversion_rates) {
//                     setExchangeRates(data.conversion_rates);
//                 }
//             } catch (error) {
//                 Alert.alert("Error", "Failed to fetch currency data.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (visible) {
//             fetchLocationAndRates();
//         }
//     }, [visible]);

//     const handleCurrencySelect = (currency) => {
//         setSelectedCurrency(currency);
//     };

//     const handleSave = () => {
//         if (!selectedCurrency || !exchangeRates[selectedCurrency]) {
//             Alert.alert("Error", "Selected currency is not available.");
//             return;
//         }
//         onCurrencyChange(selectedCurrency);
//         onClose();
//     };
    

//     return (
//         <Modal visible={visible} transparent={true} animationType="slide">
//             <TouchableWithoutFeedback onPress={onClose}>
//                 <View style={styles.overlay}>
//                     <View style={styles.popupContainer}>
//                         <Text style={styles.title}>Change Currency</Text>
//                         {loading ? (
//                             <Text>Loading...</Text>
//                         ) : (
//                             <Picker
//                                 selectedValue={selectedCurrency}
//                                 onValueChange={handleCurrencySelect}
//                                 style={styles.picker}
//                             >
//                                 {Object.keys(exchangeRates).map((currency) => (
//                                     <Picker.Item key={currency} label={currency} value={currency} />
//                                 ))}
//                             </Picker>
//                         )}
//                         <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
//                             <Text style={styles.saveButtonText}>Save</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </TouchableWithoutFeedback>
//         </Modal>
//     );
// };

// const styles = StyleSheet.create({
//     overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
//     popupContainer: { width: '90%', backgroundColor: 'white', borderRadius: 15, padding: 24 },
//     title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
//     picker: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 12 },
//     saveButton: { backgroundColor: '#6d5dfc', padding: 12, borderRadius: 8, alignItems: 'center' },
//     saveButtonText: { color: 'white', fontWeight: 'bold' }
// });

// export default ChangeCurrencyPopup;















// merge dar arata urat 



import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ChangeCurrencyPopup = ({ visible, onClose, onCurrencyChange }) => {
    const [loading, setLoading] = useState(true);
    const [exchangeRates, setExchangeRates] = useState({});
    const [selectedCurrency, setSelectedCurrency] = useState('RON');

    useEffect(() => {
        const fetchLocationAndRates = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/RON');
                const data = await response.json();
                if (data.conversion_rates) {
                    setExchangeRates(data.conversion_rates);
                }
            } catch (error) {
                Alert.alert("Error", "Failed to fetch currency data.");
            } finally {
                setLoading(false);
            }
        };

        if (visible) {
            fetchLocationAndRates();
        }
    }, [visible]);

    const handleCurrencySelect = (currency) => {
        setSelectedCurrency(currency);
    };

    const handleSave = () => {
        if (!selectedCurrency || !exchangeRates[selectedCurrency]) {
            Alert.alert("Error", "Selected currency is not available.");
            return;
        }
        onCurrencyChange(selectedCurrency);
        onClose();
    };
    

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <View style={styles.popupContainer}>
                        <Text style={styles.title}>Change Currency</Text>
                        {loading ? (
                            <Text>Loading...</Text>
                        ) : (
                            <Picker
                                selectedValue={selectedCurrency}
                                onValueChange={handleCurrencySelect}
                                style={styles.picker}
                            >
                                {Object.keys(exchangeRates).map((currency) => (
                                    <Picker.Item key={currency} label={currency} value={currency} />
                                ))}
                            </Picker>
                        )}
                        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    popupContainer: { width: '90%', backgroundColor: 'white', borderRadius: 15, padding: 24 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    picker: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 12 },
    saveButton: { backgroundColor: '#6d5dfc', padding: 12, borderRadius: 8, alignItems: 'center' },
    saveButtonText: { color: 'white', fontWeight: 'bold' }
});

export default ChangeCurrencyPopup;





