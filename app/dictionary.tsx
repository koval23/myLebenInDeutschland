import { StyleSheet, Text, View } from 'react-native';

export default function DictionaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🔧 Страница "Словарь" в разработке</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: "#666"
  },
});
