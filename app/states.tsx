import { StyleSheet, Text, View } from 'react-native';

export default function StatesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🔧 Страница "Штат вопросы" в разработке</Text>

      <View >
        <Text >32/300</Text>
        <Text >Welches ist das Wappen der</Text>

        <View >
          <Text >Answer Text</Text>
        </View>

      </View>
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
    color: "white"
  },
});
