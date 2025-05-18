import { ScrollView, Dimensions, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState } from 'react';
import { AnswerOption } from '@/components/AnswerOption';
import { QuestionOption } from '@/components/QuestionOption';
import QuestionPicker from '@/components/QuestionPicker';
import { goToNextQuestion, goToPreviousQuestion, getFrageByNumberDE, getFrageByNumberRU } from '@/constants/Functions';



const SCREEN_WIDTH = Dimensions.get('window').width;

export default function QuestionsScreen() {
  const theme = useColorScheme() ?? 'light';
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [questionNumber, setQuestionNumber] = useState(21);
  const [showTranslation, setShowTranslation] = useState(false);

  const frageDE = getFrageByNumberDE(questionNumber);
  const frageRU = getFrageByNumberRU(questionNumber);

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f4f4f4' : '#1c1c1e' }]}>
      <ScrollView key={questionNumber}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <QuestionOption
          germanText={frageDE.question}
          russianText={frageRU.question}
          showTranslation={showTranslation}
          questionNumber={questionNumber}
          couuntAllFragen={300}
        />

        <AnswerOption
          key={1}
          id={1}
          selected={selectedOption === 1}
          onSelect={setSelectedOption}
          showTranslation={showTranslation}
          germanText={frageDE.options[0]}
          russianText={frageRU.options[0]}
          answer={frageDE.answer}
        />
        <AnswerOption
          key={2}
          id={2}
          selected={selectedOption === 2}
          onSelect={setSelectedOption}
          showTranslation={showTranslation}
          germanText={frageDE.options[1]}
          russianText={frageRU.options[1]}
          answer={frageDE.answer}
        />
        <AnswerOption
          key={3}
          id={3}
          selected={selectedOption === 3}
          onSelect={setSelectedOption}
          showTranslation={showTranslation}
          germanText={frageDE.options[2]}
          russianText={frageRU.options[2]}
          answer={frageDE.answer}
        />
        <AnswerOption
          key={4}
          id={4}
          selected={selectedOption === 4}
          onSelect={setSelectedOption}
          showTranslation={showTranslation}
          germanText={frageDE.options[3]}
          russianText={frageRU.options[3]}
          answer={frageDE.answer}
        />
        <Image source={require(frageDE.image)} style={{ width: 100, height: 100 }} />
      </ScrollView>

      {/* Footer всегда закреплён */}
      <View style={styles.footer}>
        <QuestionPicker
          value={questionNumber}
          onChange={(val) => setQuestionNumber(val)}
          options={Array.from({ length: 300 }, (_, i) => i + 1)}
        />

        <TouchableOpacity
          style={styles.translateButton}
          onPress={() => setShowTranslation((prev) => !prev)}
        >
          <Text style={styles.translateText}>
            {showTranslation ? 'Скрыть' : 'Показать'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => goToPreviousQuestion(setQuestionNumber, setShowTranslation)}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => goToNextQuestion(setQuestionNumber, setShowTranslation)}>
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
    paddingVertical: 10,
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
