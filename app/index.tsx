import LanguageSelector from '@/components/LanguageSelector';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCity } from '@/constants/CityContext';

export default function HomeScreen() {
  const router = useRouter();
  // const [selectedCity, setSelectedCity] = useState<string>();
  const { selectedCity, setSelectedCity } = useCity();

  const theme = useColorScheme() ?? 'light';


  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f4f4f4' : '#1c1c1e' }]}>
      <ThemedText style={styles.title}>
        Leben in Deutschland
      </ThemedText>

      <LanguageSelector />

      <View style={styles.card}>
        <View style={styles.dropdownContainer}>
          <Ionicons name="location-outline" size={20} color="#666" />
          <Picker
            selectedValue={selectedCity}
            onValueChange={(value) => setSelectedCity(value)}
            style={styles.picker}
            dropdownIconColor="#666"
          >
            <Picker.Item label="Выберите город" value={"state"} color="#999" />
            <Picker.Item label="Baden-Württemberg" value="baden-wurttemberg" color="#999" />
            <Picker.Item label="Bayern" value="bayern" color="#999" />
            <Picker.Item label="Berlin" value="berlin" color="#999" />
            <Picker.Item label="Brandenburg" value="brandenburg" color="#999" />
            <Picker.Item label="Bremen" value="bremen" color="#999" />
            <Picker.Item label="Hamburg" value="hamburg" color="#999" />
            <Picker.Item label="Hessen" value="hessen" color="#999" />
            <Picker.Item label="Saarland" value="saarland" color="#999" />
            <Picker.Item label="Mecklenburg-Vorpommern" value="mecklenburg-vorpommern" color="#999" />
            <Picker.Item label="Niedersachsen" value="niedersachsen" color="#999" />
            <Picker.Item label="Nordrhein-Westfalen" value="nordrhein-westfalen" color="#999" />
            <Picker.Item label="Rheinland-Pfalz" value="rheinland-pfalz" color="#999" />
            <Picker.Item label="Sachsen" value="sachsen" color="#999" />
            <Picker.Item label="Sachsen-Anhalt" value="sachsen-anhalt" color="#999" />
            <Picker.Item label="Schleswig-Holstein" value="schleswig-holstein" color="#999" />
            <Picker.Item label="Thüringen" value="thueringen" color="#999" />
          </Picker>
        </View>

        <View style={styles.buttonBox}>
          <MenuButton title="Allgemaine Frage (300)" onPress={() => router.push('/questions')} />
          <MenuButton title="Bundesland Fragen (10)" onPress={() => router.push('/states')} />
          <MenuButton title="Wörterbuch" onPress={() => router.push('/dictionary')} />
        </View>
      </View>
    </View>
  );
}

function MenuButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: 'center',
  },
  title: {
    marginBottom: 30,
    fontSize: 26,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  dropdownContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    color: '#4e4cff',
  },
  buttonBox: {
    width: '100%',
    gap: 12,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4e4cff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

