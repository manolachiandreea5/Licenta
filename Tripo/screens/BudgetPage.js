// // // import React, { useState } from 'react';
// // // import { View, Modal, TouchableOpacity, Text } from 'react-native';
// // // import { PieChart } from 'react-native-chart-kit';
// // // import { useNavigation } from '@react-navigation/native';
// // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import { Container, Title, AddButton, PopupButton, PopupOption, styles } from '../components/homeStyles';
// // // import BottomNavMenu from './BottomNavMenu';
// // // import AddCostPopup from '../components/AddCostPopup';

// // // const BudgetPage = () => {
// // //     const [modalVisible, setModalVisible] = useState(false);
// // //     const [isAddCostPopupVisible, setAddCostPopupVisible] = useState(false);
// // //     const [isChangeCurrencyPopupVisible, setChangeCurrencyPopupVisible] = useState(false);
// // //     const navigation = useNavigation();

// // //     const data = [
// // //         { name: 'Paris', amount: 5000, color: '#B19CD9' },
// // //         { name: 'Berlin', amount: 1200, color: '#FFFF99' },
// // //         { name: 'Budapest', amount: 700, color: '#FF6961' },
// // //         { name: 'Milan', amount: 500, color: '#77DD77' },
// // //         { name: 'Prague', amount: 1100, color: '#AEC6CF' }
// // //     ];

// // //     const handleOptionSelect = (option) => {
// // //         switch (option) {
// // //             case 'Add Cost':
// // //                 setModalVisible(false);
// // //                 setAddCostPopupVisible(true);
// // //                 break;
// // //             case 'Change Currency':
// // //                 setModalVisible(false);
// // //                 setChangeCurrencyPopupVisible(true);
// // //                 break;
// // //             default:
// // //                 break;
// // //         }
// // //     };

// // //     return (
// // //         <Container>
// // //             {/* Header Section */}
// // //             <View style={{
// // //                 flexDirection: 'row',
// // //                 alignItems: 'center',
// // //                 justifyContent: 'space-between',
// // //                 paddingHorizontal: 8,
// // //                 marginVertical: 8,
// // //             }}>
// // //                 <Icon name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
// // //                 <Title>Budget</Title>
// // //                 <View style={{ width: 24 }} />
// // //             </View>

// // //             {/* Pie Chart Section */}
// // //             <PieChart
// // //                 data={data.map(item => ({
// // //                     name: item.name,
// // //                     population: item.amount,
// // //                     color: item.color,
// // //                     legendFontColor: '#7F7F7F',
// // //                     legendFontSize: 15
// // //                 }))}
// // //                 width={350}
// // //                 height={200}
// // //                 chartConfig={{
// // //                     backgroundGradientFrom: "#fff",
// // //                     backgroundGradientTo: "#fff",
// // //                     color: () => `#000`,
// // //                 }}
// // //                 accessor="population"
// // //                 backgroundColor="transparent"
// // //                 paddingLeft="15"
// // //                 center={[10, 0]}
// // //             />

// // //             {/* Add Button */}
// // //             <AddButton onPress={() => setModalVisible(true)}>
// // //                 <Icon name="add" size={25} color="black" />
// // //             </AddButton>

// // //             {/* Modal for Options */}
// // //             <Modal
// // //                 visible={modalVisible}
// // //                 transparent={true}
// // //                 animationType="fade"
// // //                 onRequestClose={() => setModalVisible(false)}
// // //             >
// // //                 <TouchableOpacity
// // //                     style={styles.modalOverlay}
// // //                     activeOpacity={1}
// // //                     onPress={() => setModalVisible(false)}
// // //                 >
// // //                     <View style={styles.modalContainer}>
// // //                         {[
// // //                             { icon: 'cash-outline', label: 'Add Cost' },
// // //                             { icon: 'swap-horizontal-outline', label: 'Change Currency' }
// // //                         ].map((option, index) => (
// // //                             <TouchableOpacity
// // //                                 key={index}
// // //                                 style={styles.popupButton}
// // //                                 onPress={() => handleOptionSelect(option.label)}
// // //                             >
// // //                                 <View style={styles.circle}>
// // //                                     <Icon name={option.icon} size={20} color="#fff" />
// // //                                 </View>
// // //                                 <Text style={styles.popupText}>{option.label}</Text>
// // //                             </TouchableOpacity>
// // //                         ))}
// // //                     </View>
// // //                 </TouchableOpacity>
// // //             </Modal>

// // //             {/* Popup Components for Actions */}
// // //             <AddCostPopup
// // //         visible={isAddCostPopupVisible}
// // //         onClose={() => setAddCostPopupVisible(false)}
// // //       />

// // //             {/* <Modal visible={isChangeCurrencyPopupVisible} transparent={true}>
// // //                 <View style={styles.modalContainer}>
// // //                     <Text>Change Currency Popup</Text>
// // //                     <TouchableOpacity onPress={() => setChangeCurrencyPopupVisible(false)}>
// // //                         <Text>Close</Text>
// // //                     </TouchableOpacity>
// // //                 </View>
// // //             </Modal> */}

// // //             {/* Bottom Navigation Menu */}
// // //             <BottomNavMenu navigation={navigation} />
// // //         </Container>
// // //     );
// // // };

// // // export default BudgetPage;


// // import React, { useState } from 'react';
// // import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
// // import { PieChart } from 'react-native-chart-kit';
// // import { useNavigation } from '@react-navigation/native';
// // import { Container, Title, AddButton, PopupButton, PopupOption, styles as homeStyles } from '../components/homeStyles';
// // import BottomNavMenu from './BottomNavMenu';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import AddCostPopup from '../components/AddCostPopup';

// // const BudgetPage = () => {
// //     const [modalVisible, setModalVisible] = useState(false);
// //     const navigation = useNavigation();
    
// //     const [isAddCostPopupVisible, setAddCostPopupVisible] = useState(false);
// //     const [isChangeCurrencyPopupVisible, setChangeCurrencyPopupVisible] = useState(false);

// //     const data = [
// //         { name: 'Paris', amount: 5000, color: '#B19CD9', percentage: '59%' },
// //         { name: 'Berlin', amount: 1200, color: '#FFFF99', percentage: '14%' },
// //         { name: 'Budapest', amount: 700, color: '#FF6961', percentage: '8%' },
// //         { name: 'Milan', amount: 500, color: '#77DD77', percentage: '6%' },
// //         { name: 'Prague', amount: 1100, color: '#AEC6CF', percentage: '13%' }
// //     ];
// //         const handleOptionSelect = (option) => {
// //         switch (option) {
// //             case 'Add Cost':
// //                 setModalVisible(false);
// //                 setAddCostPopupVisible(true);
// //                 break;
// //             case 'Change Currency':
// //                 setModalVisible(false);
// //                 setChangeCurrencyPopupVisible(true);
// //                 break;
// //             default:
// //                 break;
// //         }
// //     };


// //     return (
// //         <Container>
// //             {/* Header Section with Back Arrow and Centered Title */}
// //             <View style={[localStyles.header, { backgroundColor: '#E6E6FA', padding: 20, borderRadius:  16 }]}>
// //                 <TouchableOpacity onPress={() => navigation.goBack()}>
// //                     <Icon name="arrow-back" size={24} color="black" />
// //                 </TouchableOpacity>
// //                 <Title style={localStyles.centeredTitle}>Budget</Title>
// //                 <View style={{ width: 24 }} />
// //             </View>

// //             {/* Pie Chart Section with Card Effect (Percentage Removed Here) */}
// //             <View style={localStyles.chartCard}>
// //                 <PieChart
// //                     data={data.map(item => ({
// //                         name: item.name,
// //                         population: item.amount,
// //                         color: item.color,
// //                         legendFontColor: '#7F7F7F',
// //                         legendFontSize: 15
// //                     }))}
// //                     width={350}
// //                     height={200}
// //                     chartConfig={{
// //                         backgroundGradientFrom: "#fff",
// //                         backgroundGradientTo: "#fff",
// //                         color: () => `#000`,
// //                     }}
// //                     accessor="population"
// //                     backgroundColor="transparent"
// //                     paddingLeft="15"
// //                     center={[10, 0]}
// //                 />
// //             </View>

// //             {/* Cost List Section with Percentages Displayed */}
// //             <FlatList
// //                 data={data}
// //                 keyExtractor={(item) => item.name}
// //                 renderItem={({ item }) => (
// //                     <View style={localStyles.costItem}>
// //                         <View style={[localStyles.colorBox, { backgroundColor: item.color }]} />
// //                         <Text>{item.name}</Text>
// //                         <Text style={localStyles.amountText}>{item.amount} RON</Text>
// //                         <Text style={localStyles.percentageText}>{item.percentage}</Text>
// //                     </View>
// //                 )}
// //             />

// //             {/* Add Button */}
// //             <AddButton onPress={() => setModalVisible(true)}>
// //                 <Icon name="add" size={25} color="white" />
// //             </AddButton>
// //             <Modal
// //                 visible={modalVisible}
// //                 transparent={true}
// //                 animationType="fade"
// //                 onRequestClose={() => setModalVisible(false)}
// //             >
// //                 <TouchableOpacity
// //                     style={homeStyles.modalOverlay}
// //                     activeOpacity={1}
// //                     onPress={() => setModalVisible(false)}
// //                 >
// //                     <View style={homeStyles.modalContainer}>
// //                         {[
// //                             { icon: 'cash-outline', label: 'Add Cost' },
// //                             { icon: 'swap-horizontal-outline', label: 'Change Currency' }
// //                         ].map((option, index) => (
// //                             <TouchableOpacity
// //                                 key={index}
// //                                 style={homeStyles.popupButton}
// //                                 onPress={() => handleOptionSelect(option.label)}
// //                             >
// //                                 <View style={homeStyles.circle}>
// //                                     <Icon name={option.icon} size={20} color="#fff" />
// //                                 </View>
// //                                 <Text style={homeStyles.popupText}>{option.label}</Text>
// //                             </TouchableOpacity>
// //                         ))}
// //                     </View>
// //                 </TouchableOpacity>
// //             </Modal>

// //             {/* Popup Components for Actions */}
// //             <AddCostPopup
// //         visible={isAddCostPopupVisible}
// //         onClose={() => setAddCostPopupVisible(false)}
// //       />

// //             {/* Bottom Navigation */}
// //             <BottomNavMenu navigation={navigation} />
// //         </Container>
// //     );
// // };

// // const localStyles = {
// //     header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
// //     centeredTitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', flex: 1 },
// //     chartCard: { padding: 0, backgroundColor: 'white', borderRadius: 16, margin: 16, elevation: 5 },
// //     costItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
// //     colorBox: { width: 20, height: 20, borderRadius: 10, marginRight: 10 },
// //     amountText: { marginLeft: 'auto', fontWeight: 'bold' },
// //     percentageText: { marginLeft: 10, fontSize: 14 }
// // };

// // export default BudgetPage;


// import React, { useState, useEffect } from 'react';
// import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
// import { PieChart } from 'react-native-chart-kit';
// import { useNavigation } from '@react-navigation/native';
// import { Container, Title, AddButton, styles as homeStyles } from '../components/homeStyles';
// import BottomNavMenu from './BottomNavMenu';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AddCostPopup from '../components/AddCostPopup';

// const getRandomColor = () => {
//     const colors = ['#FF6961', '#77DD77', '#AEC6CF', '#FFD700', '#FFB347', '#B19CD9', '#FF4500', '#40E0D0', '#6A5ACD'];
//     return colors[Math.floor(Math.random() * colors.length)];
// };

// const BudgetPage = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [isAddCostPopupVisible, setAddCostPopupVisible] = useState(false);
//     const [isChangeCurrencyPopupVisible, setChangeCurrencyPopupVisible] = useState(false);
//     const [costs, setCosts] = useState([]);
//     const navigation = useNavigation();

//     useEffect(() => {
//         fetch('http://192.168.1.238:5000/api/costs')
//             .then(response => response.json())
//             .then(data => {
//                 const costsWithColor = data.map(cost => ({
//                     ...cost,
//                     color: getRandomColor()
//                 }));
//                 setCosts(costsWithColor);
//             })
//             .catch(error => console.error('Error fetching costs:', error));
//     }, []);

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

//     const chartData = costs.map(cost => ({
//         name: cost.type,
//         population: cost.amount,
//         color: cost.color,
//         legendFontColor: '#7F7F7F',
//         legendFontSize: 15
//     }));

//     return (
//         <Container>
//             {/* Header Section with Back Arrow and Centered Title */}
//             <View style={[localStyles.header, { backgroundColor: '#E6E6FA', padding: 20, borderRadius: 16 }]}>
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <Icon name="arrow-back" size={24} color="black" />
//                 </TouchableOpacity>
//                 <Title style={localStyles.centeredTitle}>Budget</Title>
//                 <View style={{ width: 24 }} />
//             </View>

//             {/* Pie Chart Section with Random Colors */}
//             <View style={localStyles.chartCard}>
//                 <PieChart
//                     data={chartData}
//                     width={350}
//                     height={200}
//                     chartConfig={{
//                         backgroundGradientFrom: "#fff",
//                         backgroundGradientTo: "#fff",
//                         color: () => `#000`,
//                     }}
//                     accessor="population"
//                     backgroundColor="transparent"
//                     paddingLeft="15"
//                     center={[10, 0]}
//                 />
//             </View>

//             {/* Cost List Section */}
//             <FlatList
//                 data={costs}
//                 keyExtractor={(item) => item._id}
//                 renderItem={({ item }) => (
//                     <View style={localStyles.costItem}>
//                         <View style={[localStyles.colorBox, { backgroundColor: item.color }]} />
//                         <Text>{item.type}</Text>
//                         <Text style={localStyles.amountText}>{item.amount} RON</Text>
//                     </View>
//                 )}
//             />

//             {/* Add Button */}
//             <AddButton onPress={() => setModalVisible(true)}>
//                 <Icon name="add" size={25} color="white" />
//             </AddButton>

//             {/* Modal for Adding Cost */}
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

//             {/* Add Cost Popup Component */}
//             <AddCostPopup
//                 visible={isAddCostPopupVisible}
//                 onClose={() => setAddCostPopupVisible(false)}
//             />

//             {/* Bottom Navigation Menu */}
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
import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, AddButton, styles as homeStyles } from '../components/homeStyles';
import BottomNavMenu from './BottomNavMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import AddCostPopup from '../components/AddCostPopup';

const colors = ['#FF6961', '#77DD77', '#AEC6CF', '#FFD700', '#FFB347', '#B19CD9', '#FF4500', '#40E0D0', '#6A5ACD'];

const assignColors = (data) => {
    let availableColors = [...colors];
    return data.map(cost => {
        if (availableColors.length === 0) {
            // Reumple lista de culori dacă s-au epuizat
            availableColors = [...colors];
        }
        const randomIndex = Math.floor(Math.random() * availableColors.length);
        const color = availableColors.splice(randomIndex, 1)[0]; // Scoate o culoare din listă
        return { ...cost, color };
    });
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

    const chartData = costs.map(cost => ({
        name: cost.type,
        population: cost.amount,
        color: cost.color,
        legendFontColor: '#7F7F7F',
        legendFontSize: 15
    }));

    return (
        <Container>
            {/* Header Section with Back Arrow and Centered Title */}
            <View style={[localStyles.header, { backgroundColor: '#E6E6FA', padding: 20, borderRadius: 16 }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Title style={localStyles.centeredTitle}>Budget</Title>
                <View style={{ width: 24 }} />
            </View>

            {/* Pie Chart Section */}
            <View style={localStyles.chartCard}>
                <PieChart
                    data={chartData}
                    width={250}
                    height={150}
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        color: () => `#000`,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    center={[10, 0]}
                />
            </View>

            {/* Cost List Section */}
            <FlatList
                data={costs}
                keyExtractor={(item) => item.type}
                renderItem={({ item }) => (
                    <View style={localStyles.costItem}>
                        <View style={[localStyles.colorBox, { backgroundColor: item.color }]} />
                        <Text>{item.type}</Text>
                        <Text style={localStyles.amountText}>{item.amount} RON</Text>
                    </View>
                )}
            />

            {/* Add Button */}
            <AddButton onPress={() => setModalVisible(true)}>
                <Icon name="add" size={25} color="white" />
            </AddButton>

            {/* Modal for Adding Cost */}
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

            {/* Add Cost Popup Component */}
            <AddCostPopup
                visible={isAddCostPopupVisible}
                onClose={() => setAddCostPopupVisible(false)}
            />

            {/* Bottom Navigation Menu */}
            <BottomNavMenu navigation={navigation} />
        </Container>
    );
};

const localStyles = {
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    centeredTitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', flex: 1 },
    chartCard: { padding: 20, backgroundColor: 'white', borderRadius: 16, margin: 16, elevation: 5 },
    costItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
    colorBox: { width: 20, height: 20, borderRadius: 10, marginRight: 10 },
    amountText: { marginLeft: 'auto', fontWeight: 'bold' },
    percentageText: { marginLeft: 10, fontSize: 14 }
};

export default BudgetPage;
