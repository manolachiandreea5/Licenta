// import React, { useState, useEffect } from 'react';
// import { View, Text, Modal, TouchableOpacity, FlatList, Alert } from 'react-native';
// import { PieChart } from 'react-native-chart-kit';
// import { useNavigation } from '@react-navigation/native';
// import { Container, Title, AddButton, styles as homeStyles } from '../components/homeStyles';
// import BottomNavMenu from './BottomNavMenu';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AddCostPopup from '../components/AddCostPopup';
// import ChangeCurrencyPopup from '../components/ChangeCurrencyPopup';

// const colors = ['#FF6961', '#77DD77', '#AEC6CF', '#FFD700', '#FFB347', '#B19CD9'];

// const assignColors = (data) => {
//     let availableColors = [...colors];
//     return data.map(cost => ({
//         ...cost,
//         color: availableColors.length ? availableColors.pop() : '#CCCCCC'
//     }));
// };

// const groupCostsByType = (costs) => {
//     const grouped = {};
//     costs.forEach(cost => {
//         if (grouped[cost.type]) {
//             grouped[cost.type].amount += cost.amount;
//         } else {
//             grouped[cost.type] = { ...cost };
//         }
//     });
//     return Object.values(grouped);
// };

// const BudgetPage = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [isAddCostPopupVisible, setAddCostPopupVisible] = useState(false);
//     const [isChangeCurrencyPopupVisible, setChangeCurrencyPopupVisible] = useState(false);
//     const [costs, setCosts] = useState([]);
//     const [currency, setCurrency] = useState('RON');
//     const [exchangeRates, setExchangeRates] = useState({});
//     const navigation = useNavigation();

//     useEffect(() => {
//         fetch('http://192.168.1.238:5000/api/costs')
//             .then(response => response.json())
//             .then(data => {
//                 const groupedCosts = groupCostsByType(data);
//                 const costsWithColor = assignColors(groupedCosts);
//                 setCosts(costsWithColor);
//             })
//             .catch(error => console.error('Error fetching costs:', error));
//     }, []);


//     const handleCurrencyChange = async (newCurrency) => {
//         setCurrency(newCurrency);
//         try {
//             //const response = await fetch('https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/RON');
//             const response = await fetch(`https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/${newCurrency}`);
//             const data = await response.json();

//             if (!data.conversion_rates || !data.conversion_rates[newCurrency]) {
//                 throw new Error('Currency data unavailable');
//             }

//             setExchangeRates(data.conversion_rates);
//         } catch (error) {
//             console.error('Error fetching exchange rates:', error);
//             Alert.alert("Error", "Failed to fetch exchange rates.");
//             setCurrency('RON');  
//         }
//     };


//     const convertAmount = (amount, currency, exchangeRates) => {
//         // Verificare dacă suma este validă
//         if (typeof amount !== 'number' || isNaN(amount)) {
//             console.warn('Invalid amount provided:', amount);
//             return "Invalid Amount";
//         }

//         // Verificare dacă exchangeRates și valuta sunt valide
//         if (!exchangeRates || typeof exchangeRates !== 'object' || !exchangeRates[currency]) {
//             console.warn('Exchange rate not available for selected currency.');
//             return `${amount.toFixed(2)} RON`; 
//         }

//         const rate = exchangeRates[currency];
//         if (typeof rate !== 'number' || isNaN(rate) || rate <= 0) {
//             console.warn('Invalid exchange rate data:', rate);
//             return `${amount.toFixed(2)} RON`;
//         }

//         // Calculul conversiei corecte
//         const convertedAmount = amount * rate;
//         return `${convertedAmount.toFixed(2)} ${currency}`;
//     };


//     const chartData = costs.map(cost => ({
//         name: cost.type,
//         population: parseFloat(convertAmount(cost.amount, currency, exchangeRates)) || 0, 
//         color: cost.color || '#77DD77',
//         legendFontColor: '#7F7F7F',
//         legendFontSize: 15
//     }));


//     return (
//         <Container>
//             <View style={[homeStyles.header, { padding: 20 }]}>
//                 <Title>Budget ({currency})</Title>
//                 <TouchableOpacity onPress={() => setChangeCurrencyPopupVisible(true)}>
//                     <Text style={{ color: 'blue' }}>Change Currency</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Pie Chart Section */}
//             <View style={homeStyles.chartCard}>
//                 <PieChart
//                     data={chartData}
//                     width={350}
//                     height={200}
//                     chartConfig={{ color: () => '#000' }}
//                     accessor="population"
//                 />
//             </View>

//             {/* List of Costs */}
//             <FlatList
//     data={costs}
//     keyExtractor={(item) => item.type}
//     renderItem={({ item }) => (
//         <View style={localStyles.costItem}>
//             <View style={[localStyles.colorBox, { backgroundColor: item.color || '#77DD77' }]} />
//             <Text>{item.type}</Text>
//             <Text style={localStyles.amountText}>{convertAmount(item.amount, currency, exchangeRates)}</Text>
//         </View>
//     )}
// />



//             {/* Modals */}
//             <ChangeCurrencyPopup
//                 visible={isChangeCurrencyPopupVisible}
//                 onClose={() => setChangeCurrencyPopupVisible(false)}
//                 onCurrencyChange={handleCurrencyChange}
//             />
//             <AddCostPopup
//                 visible={isAddCostPopupVisible}
//                 onClose={() => setAddCostPopupVisible(false)}
//             />

//             <BottomNavMenu navigation={navigation} />
//         </Container>
//     );
// };

// const localStyles = {
//     header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//     centeredTitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', flex: 1 },
//     chartCard: { padding: 20, backgroundColor: 'white', borderRadius: 16, margin: 16, elevation: 5 },
//     costItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
//     colorBox: { width: 20, height: 20, borderRadius: 10, marginRight: 10 },
//     amountText: { marginLeft: 'auto', fontWeight: 'bold' },
//     percentageText: { marginLeft: 10, fontSize: 14 }
// };

// export default BudgetPage;















// merge dar arata urat 


// import React, { useState, useEffect } from 'react';
// import { View, Text, Modal, TouchableOpacity, FlatList, Alert } from 'react-native';
// import { PieChart } from 'react-native-chart-kit';
// import { useNavigation } from '@react-navigation/native';
// import { Container, Title, AddButton, styles as homeStyles } from '../components/homeStyles';
// import BottomNavMenu from './BottomNavMenu';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AddCostPopup from '../components/AddCostPopup';
// import ChangeCurrencyPopup from '../components/ChangeCurrencyPopup';


// const colors = ['#FF6961', '#77DD77', '#AEC6CF', '#FFD700', '#FFB347', '#B19CD9'];

// const assignColors = (data) => {
//     let availableColors = [...colors];
//     return data.map(cost => ({
//         ...cost,
//         color: availableColors.length ? availableColors.pop() : '#CCCCCC'
//     }));
// };
// const groupCostsByType = (costs) => {
//     const grouped = {};
//     costs.forEach(cost => {
//         if (grouped[cost.type]) {
//             grouped[cost.type].amount += cost.amount;
//         } else {
//             grouped[cost.type] = { ...cost };
//         }
//     });
//     return Object.values(grouped);
// };

// const BudgetPage = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [isAddCostPopupVisible, setAddCostPopupVisible] = useState(false);
//     const [isChangeCurrencyPopupVisible, setChangeCurrencyPopupVisible] = useState(false);
//     const [costs, setCosts] = useState([]);
//     const [currency, setCurrency] = useState('RON');
//     const [exchangeRates, setExchangeRates] = useState({});
//     const navigation = useNavigation();

//     useEffect(() => {
//         fetch('http://192.168.1.238:5000/api/costs')
//             .then(response => response.json())
//             .then(data => {
//                 const groupedCosts = groupCostsByType(data);
//                 const costsWithColor = assignColors(groupedCosts);
//                 setCosts(costsWithColor);
//             })
//             .catch(error => console.error('Error fetching costs:', error));
//     }, []);


//     const handleCurrencyChange = async (newCurrency) => {
//         setCurrency(newCurrency);
//         try {
//             const response = await fetch('https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/RON');
//             //const response = await fetch(`https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/${newCurrency}`);
//             const data = await response.json();

//             if (!data.conversion_rates || !data.conversion_rates[newCurrency]) {
//                 throw new Error('Currency data unavailable');
//             }

//             setExchangeRates(data.conversion_rates);
//         } catch (error) {
//             console.error('Error fetching exchange rates:', error);
//             Alert.alert("Error", "Failed to fetch exchange rates.");
//             setCurrency('RON');  
//         }
//     };
//     const handleOptionSelect = (option) => {
//         switch (option) {
//             case 'Add Cost':
//                 setModalVisible(false);
//                 setAddCostPopupVisible(true);
//                 break;
//             case 'Change Currency':
//                 setModalVisible(false);
//                 setChangeCurrencyPopupVisible(true);
//                 break;
//             default:
//                 break;
//         }
//     };


//     const convertAmount = (amount, currency, exchangeRates) => {
//         // Verificare dacă suma este validă
//         if (typeof amount !== 'number' || isNaN(amount)) {
//             console.warn('Invalid amount provided:', amount);
//             return "Invalid Amount";
//         }

//         // Verificare dacă exchangeRates și valuta sunt valide
//         if (!exchangeRates || typeof exchangeRates !== 'object' || !exchangeRates[currency]) {
//             console.warn('Exchange rate not available for selected currency.');
//             return `${amount.toFixed(2)} RON`; 
//         }

//         const rate = exchangeRates[currency];
//         if (typeof rate !== 'number' || isNaN(rate) || rate <= 0) {
//             console.warn('Invalid exchange rate data:', rate);
//             return `${amount.toFixed(2)} RON`;
//         }

//         // Calculul conversiei corecte
//         const convertedAmount = amount * rate;
//         return `${convertedAmount.toFixed(2)} ${currency}`;
//     };


//     const chartData = costs.map(cost => ({
//         name: cost.type,
//         population: parseFloat(convertAmount(cost.amount, currency, exchangeRates)) || 0, 
//         color: cost.color || '#77DD77',
//         legendFontColor: '#7F7F7F',
//         legendFontSize: 15
//     }));


//     return (
//         <Container>
//             {/* Header Section with Back Arrow and Centered Title */}
//                         <View style={[localStyles.header, { backgroundColor: '#E6E6FA', padding: 16, borderRadius: 16 }]}>
//                             <TouchableOpacity onPress={() => navigation.goBack()}>
//                                 <Icon name="arrow-back" size={24} color="black" />
//                             </TouchableOpacity>
//                             <Title style={localStyles.centeredTitle}>Budget</Title>
//                             <View style={{ width: 24 }} />
//                         </View>

//             {/* Pie Chart Section with Random Colors */}
//                         <View style={localStyles.chartCard}>
//                             <PieChart
//                                 data={chartData}
//                                 width={350}
//                                 height={200}
//                                 chartConfig={{
//                                     backgroundGradientFrom: "#fff",
//                                     backgroundGradientTo: "#fff",
//                                     color: () => `#000`,
//                                 }}
//                                 accessor="population"
//                                 backgroundColor="transparent"
//                                 paddingLeft="8"
//                                 center={[8, 0]}
//                             />
//                         </View>

//             {/* List of Costs */}
//             <FlatList
//     data={costs}
//     keyExtractor={(item) => item.type}
//     renderItem={({ item }) => (
//         <View style={localStyles.costItem}>
//             <View style={[localStyles.colorBox, { backgroundColor: item.color || '#77DD77' }]} />
//             <Text>{item.type}</Text>
//             <Text style={localStyles.amountText}>{convertAmount(item.amount, currency, exchangeRates)}</Text>
//         </View>
//     )}
// />

//             {/* Add Button */}
//             <AddButton onPress={() => setModalVisible(true)}>
//                 <Icon name="add" size={25} color="white" />
//             </AddButton>

// {/* Modal for Adding Cost */}
//             <Modal
//                 visible={modalVisible}
//                 transparent={true}
//                 animationType="fade"
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <TouchableOpacity
//                     style={homeStyles.modalOverlay}
//                     activeOpacity={1}
//                     onPress={() => setModalVisible(false)}
//                 >
//                     <View style={homeStyles.modalContainer}>
//                         {[
//                             { icon: 'cash-outline', label: 'Add Cost' },
//                             { icon: 'swap-horizontal-outline', label: 'Change Currency' }
//                         ].map((option, index) => (
//                             <TouchableOpacity
//                                 key={index}
//                                 style={homeStyles.popupButton}
//                                 onPress={() => handleOptionSelect(option.label)}
//                             >
//                                 <View style={homeStyles.circle}>
//                                     <Icon name={option.icon} size={20} color="#fff" />
//                                 </View>
//                                 <Text style={homeStyles.popupText}>{option.label}</Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>
//                 </TouchableOpacity>
//             </Modal>

//             {/* Modals */}
//             <ChangeCurrencyPopup
//                 visible={isChangeCurrencyPopupVisible}
//                 onClose={() => setChangeCurrencyPopupVisible(false)}
//                 onCurrencyChange={handleCurrencyChange}
//             />
//             <AddCostPopup
//                 visible={isAddCostPopupVisible}
//                 onClose={() => setAddCostPopupVisible(false)}
//             />

//             <BottomNavMenu navigation={navigation} />
//         </Container>
//     );
// };

// const localStyles = {
//     header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//     centeredTitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', flex: 1 , marginTop: 8},
//     chartCard: { padding: 0, backgroundColor: 'white', borderRadius: 16, margin: 8, elevation: 5, marginBottom: 16, marginTop: 16 },
//     costItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
//     colorBox: { width: 20, height: 20, borderRadius: 10, marginRight: 10 },
//     amountText: { marginLeft: 'auto', fontWeight: 'bold' },
//     percentageText: { marginLeft: 10, fontSize: 14 }
// };

// export default BudgetPage;




//ultima varianta buna!!!!!1




import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, Alert } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, AddButton, styles as homeStyles } from '../components/homeStyles';
import BottomNavMenu from './BottomNavMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import AddCostPopup from '../components/AddCostPopup';
import ChangeCurrencyPopup from '../components/ChangeCurrencyPopup';


const colors = ['#FF6961', '#77DD77', '#AEC6CF', '#FFD700', '#FFB347', '#B19CD9'];

const assignColors = (data) => {
    let availableColors = [...colors];
    return data.map(cost => ({
        ...cost,
        color: availableColors.length ? availableColors.pop() : '#CCCCCC'
    }));
};
const groupCostsByType = (costs) => {
    const grouped = {};
    costs.forEach(cost => {
        if (grouped[cost.type]) {
            grouped[cost.type].amount += cost.amount;
        } else {
            grouped[cost.type] = { ...cost };
        }
    });
    return Object.values(grouped);
};

const BudgetPage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isAddCostPopupVisible, setAddCostPopupVisible] = useState(false);
    const [isChangeCurrencyPopupVisible, setChangeCurrencyPopupVisible] = useState(false);
    const [costs, setCosts] = useState([]);
    const [currency, setCurrency] = useState('RON');
    const [exchangeRates, setExchangeRates] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        fetch('http://192.168.1.238:5000/api/costs')
            .then(response => response.json())
            .then(data => {
                const groupedCosts = groupCostsByType(data);
                const costsWithColor = assignColors(groupedCosts);
                setCosts(costsWithColor);
            })
            .catch(error => console.error('Error fetching costs:', error));
    }, []);


    const handleCurrencyChange = async (newCurrency) => {
        setCurrency(newCurrency);
        try {
            const response = await fetch('https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/RON');
            //const response = await fetch(`https://v6.exchangerate-api.com/v6/529d5ce80c4dd1db53577bad/latest/${newCurrency}`);
            const data = await response.json();
            //console.log(newCurrency);

            if (!data.conversion_rates || !data.conversion_rates[newCurrency]) {
                throw new Error('Currency data unavailable');
            }

            setExchangeRates(data.conversion_rates);
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
            Alert.alert("Error", "Failed to fetch exchange rates.");
            setCurrency('RON');
        }
    };
    const handleOptionSelect = (option) => {
        switch (option) {
            case 'Add Cost':
                setModalVisible(false);
                setAddCostPopupVisible(true);
                break;
            case 'Change Currency':
                setModalVisible(false);
                setChangeCurrencyPopupVisible(true);
                break;
            default:
                break;
        }
    };


    const convertAmount = (amount, currency, exchangeRates) => {
        // Verificare dacă suma este validă
        if (typeof amount !== 'number' || isNaN(amount)) {
            console.warn('Invalid amount provided:', amount);
            return "Invalid Amount";
        }

        // Verificare dacă exchangeRates și valuta sunt valide
        if (!exchangeRates || typeof exchangeRates !== 'object' || !exchangeRates[currency]) {
            //console.warn('Exchange rate not available for selected currency.');
            return `${amount.toFixed(2)} RON`;
        }

        const rate = exchangeRates[currency];
        if (typeof rate !== 'number' || isNaN(rate) || rate <= 0) {
            console.warn('Invalid exchange rate data:', rate);
            return `${amount.toFixed(2)} RON`;
        }

        // Calculul conversiei corecte
        const convertedAmount = amount * rate;
        return `${convertedAmount.toFixed(2)} ${currency}`;
    };


    const chartData = costs.map(cost => ({
        name: cost.type,
        population: parseFloat(convertAmount(cost.amount, currency, exchangeRates)) || 0,
        color: cost.color || '#77DD77',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
    }));


    return (
        <Container>
            {/* Header Section with Back Arrow and Centered Title */}
            <View style={[localStyles.header, { backgroundColor: '#E6E6FA', padding: 16, borderRadius: 16 }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Title style={localStyles.centeredTitle}>Budget</Title>
                <View style={{ width: 24 }} />
            </View>

            {/* Pie Chart Section with Random Colors */}
            <View style={localStyles.chartCard}>
                <PieChart
                    data={chartData}
                    width={350}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        color: () => `#000`,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="8"
                    center={[8, 0]}
                />
            </View>

            {/* List of Costs */}
            <FlatList
                data={costs}
                keyExtractor={(item) => item.type}
                renderItem={({ item }) => (
                    <View style={localStyles.costItem}>
                        <View style={[localStyles.colorBox, { backgroundColor: item.color || '#77DD77' }]} />
                        <Text>{item.type}</Text>
                        <Text style={localStyles.amountText}>{convertAmount(item.amount, currency, exchangeRates)}</Text>
                    </View>
                )}
            />

            {/* Add Button */}
            <AddButton onPress={() => setModalVisible(true)}>
                <Icon name="add" size={25} color="white" />
            </AddButton>

            {/* Modal for Adding Cost */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={homeStyles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={homeStyles.modalContainer}>
                        {[
                            { icon: 'cash-outline', label: 'Add Cost' },
                            { icon: 'swap-horizontal-outline', label: 'Change Currency' }
                        ].map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={homeStyles.popupButton}
                                onPress={() => handleOptionSelect(option.label)}
                            >
                                <View style={homeStyles.circle}>
                                    <Icon name={option.icon} size={20} color="#fff" />
                                </View>
                                <Text style={homeStyles.popupText}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </Modal>

            {/* Modals */}
            <ChangeCurrencyPopup
                visible={isChangeCurrencyPopupVisible}
                onClose={() => setChangeCurrencyPopupVisible(false)}
                onCurrencyChange={handleCurrencyChange}
            />
            <AddCostPopup
                visible={isAddCostPopupVisible}
                onClose={() => setAddCostPopupVisible(false)}
            />

            <BottomNavMenu navigation={navigation} />
        </Container>
    );
};

const localStyles = {
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    centeredTitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', flex: 1, marginTop: 8 },
    chartCard: { padding: 0, backgroundColor: 'white', borderRadius: 16, margin: 8, elevation: 5, marginBottom: 16, marginTop: 16 },
    costItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
    colorBox: { width: 20, height: 20, borderRadius: 10, marginRight: 10 },
    amountText: { marginLeft: 'auto', fontWeight: 'bold' },
    percentageText: { marginLeft: 10, fontSize: 14 }
};

export default BudgetPage;











