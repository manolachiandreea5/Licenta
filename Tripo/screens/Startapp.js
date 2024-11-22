import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { Colors, styles} from '../components/styles'; // Importing styled components and colors

const { primary } = Colors; 

const Startapp = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('FirstPage');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: primary }}>
          <StatusBar style="light" />
          <Text style={styles.titleFirstPage}>Tripo</Text>
          <Text style={styles.subtitleFirstPage}>Create your dream trip</Text>
        </View>
      );
};

export default Startapp;
