import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TipHistory from '../components/TipHistory';  // Corrección de importación
import TipInput from '../components/TipInput';  // Corrección de importación

export default function Screem() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [history, setHistory] = useState<Array<{ bill: number; tip: number; total: number }>>([]);

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    if (isNaN(bill) || bill <= 0) return;

    const tip = (bill * tipPercentage) / 100;
    const total = bill + tip;

    setHistory([{ bill, tip, total }, ...history]);
  };

  return (
    <View style={styles.container}>
      <TipInput billAmount={billAmount} setBillAmount={setBillAmount} tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
      
      <TipHistory history={history} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});
