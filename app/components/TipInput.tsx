import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [history, setHistory] = useState([]);

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    if (!bill || bill <= 0) return;
    
    const tip = (bill * tipPercentage) / 100;
    const total = bill + tip;

    setHistory([{ bill, tipPercentage, tip, total }, ...history]);
  };

  useEffect(() => {
    calculateTip();
  }, [billAmount, tipPercentage]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Monto del Consumo:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={billAmount}
        onChangeText={setBillAmount}
        placeholder="Ingrese el monto"
      />
      
      <Text style={styles.label}>Seleccione Propina:</Text>
      <View style={styles.buttonContainer}>
        {[10, 15, 20].map((percent) => (
          <TouchableOpacity key={percent} style={styles.button} onPress={() => setTipPercentage(percent)}>
            <Text style={styles.buttonText}>{percent}%</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Otro %"
        onChangeText={(value) => setTipPercentage(parseFloat(value) || 0)}
      />

      <Text style={styles.result}>Monto de Propina: ${history.length > 0 ? history[0].tip.toFixed(2) : '0.00'}</Text>
      <Text style={styles.result}>Total a Pagar: ${history.length > 0 ? history[0].total.toFixed(2) : '0.00'}</Text>

      <Text style={styles.label}>Historial de Cálculos:</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>Consumo: ${item.bill.toFixed(2)}</Text>
            <Text>Propina: {item.tipPercentage}% (${item.tip.toFixed(2)})</Text>
            <Text>Total: ${item.total.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#28a745',
  },
  historyItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 3,
  },
});

export default TipCalculator;
