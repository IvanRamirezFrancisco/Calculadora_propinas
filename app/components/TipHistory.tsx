import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface TipHistoryProps {
  history: Array<{ bill: number; tip: number; total: number }>;
}

export default function TipHistory({ history }: TipHistoryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Consumo: ${item.bill.toFixed(2)}</Text>
            <Text>Propina: ${item.tip.toFixed(2)}</Text>
            <Text>Total: ${item.total.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
