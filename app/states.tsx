import { AnswerOption } from '@/components/AnswerOption';
import { QuestionOption } from '@/components/QuestionOption';
import QuestionPicker from '@/components/QuestionPicker';
import { getFrageByStateRU, getFrageByStateDE, goToNextQuestionState, goToPreviousQuestion } from '@/constants/Functions';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { usePersistentState } from '../hooks/usePersistentState';
import { useCity } from '@/constants/CityContext';

import { useLayoutEffect } from 'react';
import { useNavigation } from 'expo-router';
import { stateNameMap } from '@/constants/Question';



const SCREEN_WIDTH = Dimensions.get('window').width;

export const imageMapState: { [key: string]: any } = {
  'baden-wurttemberg_1': require('@/assets/images/questionImg/baden-wurttemberg_1.png'),
  'baden-wurttemberg_8': require('@/assets/images/questionImg/baden-wurttemberg_8.png'),
  'bayern_1': require('@/assets/images/questionImg/bayern_1.png'),
  'bayern_8': require('@/assets/images/questionImg/bayern_8.png'),
  'berlin_1': require('@/assets/images/questionImg/berlin_1.png'),
  'berlin_8': require('@/assets/images/questionImg/berlin_8.png'),
  'brandenburg_1': require('@/assets/images/questionImg/brandenburg_1.png'),
  'brandenburg_8': require('@/assets/images/questionImg/brandenburg_8.png'),
  'bremen_1': require('@/assets/images/questionImg/bremen_1.png'),
  'bremen_8': require('@/assets/images/questionImg/bremen_8.png'),
  'hamburg_1': require('@/assets/images/questionImg/hamburg_1.png'),
  'hamburg_8': require('@/assets/images/questionImg/hamburg_8.png'),
  'hessen_1': require('@/assets/images/questionImg/hessen_1.png'),
  'hessen_8': require('@/assets/images/questionImg/hessen_8.png'),
  'mecklenburg-vorpommern_1': require('@/assets/images/questionImg/mecklenburg-vorpommern_1.png'),
  'mecklenburg-vorpommern_8': require('@/assets/images/questionImg/mecklenburg-vorpommern_8.png'),
  'niedersachsen_1': require('@/assets/images/questionImg/niedersachsen_1.png'),
  'niedersachsen_8': require('@/assets/images/questionImg/niedersachsen_8.png'),
  'nordrhein-westfalen_1': require('@/assets/images/questionImg/nordrhein-westfalen_1.png'),
  'nordrhein-westfalen_8': require('@/assets/images/questionImg/nordrhein-westfalen_8.png'),
  'rheinland-pfalz_1': require('@/assets/images/questionImg/rheinland-pfalz_1.png'),
  'rheinland-pfalz_8': require('@/assets/images/questionImg/rheinland-pfalz_8.png'),
  'saarland_1': require('@/assets/images/questionImg/saarland_1.png'),
  'saarland_8': require('@/assets/images/questionImg/saarland_8.png'),
  'sachsen_1': require('@/assets/images/questionImg/sachsen_1.png'),
  'sachsen_8': require('@/assets/images/questionImg/sachsen_8.png'),
  'sachsen-anhalt_1': require('@/assets/images/questionImg/sachsen-anhalt_1.png'),
  'sachsen-anhalt_8': require('@/assets/images/questionImg/sachsen-anhalt_8.png'),
  'schleswig-holstein_1': require('@/assets/images/questionImg/schleswig-holstein_1.png'),
  'schleswig-holstein_8': require('@/assets/images/questionImg/schleswig-holstein_8.png'),
  'thueringen_1': require('@/assets/images/questionImg/thueringen_1.png'),
  'thueringen_8': require('@/assets/images/questionImg/thueringen_8.png'),
};


export default function StatesScreen() {
  const theme = useColorScheme() ?? 'light';
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [questionNumberState, setQuestionNumberState] = usePersistentState<number>('questionNumberState', 1);
  const { selectedCity } = useCity();
  const [showTranslationState, setShowTranslationState] = useState(false);

  const frageStateDE = getFrageByStateDE(selectedCity, questionNumberState);
  const frageStateRU = getFrageByStateRU(selectedCity, questionNumberState);
  const key = `${selectedCity}_${frageStateDE.question_number}`;

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCity === 'state' ? 'Выберите город' : stateNameMap[selectedCity],
    });
  }, [navigation, selectedCity]);



  if (selectedCity === 'state') {
    return (
      <View style={[styles.container, styles2.centered, { backgroundColor: theme === 'light' ? '#f4f4f4' : '#1c1c1e' }]}>
        <Text style={styles2.selectCityText}>Пожалуйста, выберите город</Text>
      </View>
    );
  }
  const answerOptions = [
    { id: 1, germanText: frageStateDE.options[0], russianText: frageStateRU.options[0] },
    { id: 2, germanText: frageStateDE.options[1], russianText: frageStateRU.options[1] },
    { id: 3, germanText: frageStateDE.options[2], russianText: frageStateRU.options[2] },
    { id: 4, germanText: frageStateDE.options[3], russianText: frageStateRU.options[3] },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f4f4f4' : '#1c1c1e' }]}>
      <ScrollView key={questionNumberState}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <QuestionOption
          germanText={frageStateDE.question}
          russianText={frageStateRU.question}
          showTranslation={showTranslationState}
          questionNumber={questionNumberState}
          couuntAllFragen={10}
        />

        {answerOptions.map(option => (
          <AnswerOption
            key={option.id}
            id={option.id}
            selected={selectedOption === option.id}
            onSelect={setSelectedOption}
            showTranslation={showTranslationState}
            germanText={option.germanText}
            russianText={option.russianText}
            answer={frageStateDE.answer}
          />
        ))}

        {frageStateDE.image && imageMapState[key] && (
          <View
            style={{
              width: SCREEN_WIDTH - 20,
              height: 150,
              alignSelf: 'center',
              overflow: 'hidden',       // чтобы обрезать картинку, если она выходит за пределы
              marginTop: 20,
              marginBottom: 16,
              borderRadius: 8,          // по желанию
            }}
          >
            <Image
              source={imageMapState[key]}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="contain"
            />
          </View>
        )}

      </ScrollView>

      {/* Footer всегда закреплён */}
      <View style={styles.footer}>
        <QuestionPicker
          value={questionNumberState}
          onChange={(val) => setQuestionNumberState(val)}
          options={Array.from({ length: 10 }, (_, i) => i + 1)}
        />

        <TouchableOpacity
          style={styles.translateButton}
          onPress={() => setShowTranslationState((prev) => !prev)}
        >
          <Text style={styles.translateText}>
            {showTranslationState ? 'Скрыть' : 'Показать'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => goToPreviousQuestion(setQuestionNumberState, setShowTranslationState)}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => goToNextQuestionState(setQuestionNumberState, setShowTranslationState)}>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 100, // чтобы не налезал контент на footer
  },
  translateText: {
    color: 'white',
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 0,
    paddingVertical: 35,
    paddingHorizontal: 10,
    gap: 8,
  },
  translateButton: {
    backgroundColor: '#4e4cff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  navButton: {
    backgroundColor: '#4e4cff',
    padding: 10,
    borderRadius: 8,
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  selectCityText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  // ...остальные стили как есть
});