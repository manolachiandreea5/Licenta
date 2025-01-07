import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const Buget = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');

  const convertCurrency = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/RON`);
      const rate = response.data.rates[currency];
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Currency Converter</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Amount in RON"
      />
      <Button title="Convert to EUR" onPress={convertCurrency} />
      {convertedAmount ? <Text>Converted Amount: {convertedAmount} {currency}</Text> : null}
    </View>
  );
};

export default Buget;
