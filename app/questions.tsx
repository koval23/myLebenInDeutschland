import { AnswerOption } from '@/components/AnswerOption';
import { QuestionOption } from '@/components/QuestionOption';
import QuestionPicker from '@/components/QuestionPicker';
import { getFrageByNumberDE, getFrageByNumberRU, goToNextQuestion, goToPreviousQuestion } from '@/constants/Functions';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { usePersistentState } from '../hooks/usePersistentState';




const SCREEN_WIDTH = Dimensions.get('window').width;
export const imageMap: { [key: number]: any } = {
  21: require('@/assets/images/questionImg/21.png'),
  55: require('@/assets/images/questionImg/55.png'),
  70: require('@/assets/images/questionImg/70.png'),
  130: require('@/assets/images/questionImg/130.png'),
  176: require('@/assets/images/questionImg/176.png'),
  181: require('@/assets/images/questionImg/181.png'),
  187: require('@/assets/images/questionImg/187.png'),
  209: require('@/assets/images/questionImg/209.png'),
  216: require('@/assets/images/questionImg/216.png'),
  226: require('@/assets/images/questionImg/226.png'),
  // и т.д.
};

export default function QuestionsScreen() {
  const theme = useColorScheme() ?? 'light';
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  // const [questionNumber, setQuestionNumber] = useState(1);
  const [questionNumber, setQuestionNumber] = usePersistentState<number>('question_number', 1);

  const [showTranslation, setShowTranslation] = useState(false);

  const frageDE = getFrageByNumberDE(questionNumber);
  const frageRU = getFrageByNumberRU(questionNumber);

  const answerOptions = [
    { id: 1, textIndex: 0 },
    { id: 2, textIndex: 1 },
    { id: 3, textIndex: 2 },
    { id: 4, textIndex: 3 },
  ];

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
{/* 4 варианта ответа */}
        {answerOptions.map(option => (
          <AnswerOption
            key={option.id}
            id={option.id}
            selected={selectedOption === option.id}
            onSelect={setSelectedOption}
            showTranslation={showTranslation}
            germanText={frageDE.options[option.textIndex]}
            russianText={frageRU.options[option.textIndex]}
            answer={frageDE.answer}
          />
        ))}

        {frageDE.image && imageMap[frageDE.question_number] && (
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
              source={imageMap[frageDE.question_number]}
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
