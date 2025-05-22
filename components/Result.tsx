import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  correctCount: number;
  total: number;
  onRestart: () => void;
};

export const TestResult = ({ correctCount, total, onRestart }: Props) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Тест завершён ✅</Text>

      <View style={styles.scoreRow}>
        <Text style={styles.scoreLabel}>Правильных ответов: </Text>
        <Text
          style={[
            styles.scoreValue,
            { color: correctCount >= 17 ? 'limegreen' : 'tomato' },
          ]}
        >
          {correctCount} / {total}
        </Text>
      </View>

      <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
        <Text style={styles.restartText}>Пройти заново</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  scoreRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  scoreLabel: {
    fontSize: 18,
    color: 'white',
  },
  scoreValue: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  restartButton: {
    backgroundColor: '#4e4cff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  restartText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
