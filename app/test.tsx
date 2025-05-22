import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AnswerTest } from '@/components/AnswerTest';
import { QuestionTest } from '@/components/QuestionTest';
import { TestResult } from '@/components/Result';
import { useCity } from '@/constants/CityContext';
import { compareAndCount, getRandomIndexes } from '@/constants/Functions';
import { imageMapState, questionsDE, questionsStateDE } from '@/constants/Question';
import { QuestionDE } from '@/constants/Types';
import { useColorScheme } from '@/hooks/useColorScheme';


// Размер экрана для адаптивного отображения картинки
const SCREEN_WIDTH = Dimensions.get('window').width;

// Мапа с изображениями по номеру вопроса (если есть)
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
};

export default function TestScreen() {
    const theme = useColorScheme() ?? 'light';
    const [questionNumberTest, setQuestionNumberTest] = useState<number>(1);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [correctCount, setCorrectCount] = useState<number>(0); // количество правильных ответов


    const [testQuestions, setTestQuestions] = useState<QuestionDE[]>([]);
    const { selectedCity } = useCity();

    useFocusEffect(
        useCallback(() => {
            if (!selectedCity || !questionsStateDE[selectedCity]) return;

            const generalIndexes = getRandomIndexes(questionsDE.length, 30);
            const stateIndexes = getRandomIndexes(questionsStateDE[selectedCity].length, 3);

            const general = generalIndexes.map(i => ({
                ...questionsDE[i],
                source: 'general'
            }));
            const state = stateIndexes.map(i => ({
                ...questionsStateDE[selectedCity][i],
                source: 'state',
                stateKey: selectedCity
            }));
            console.log(state[0]);

            const combined = [...general, ...state];
            setTestQuestions(combined);
            setSelectedOption(null);
            setQuestionNumberTest(1);
            AsyncStorage.removeItem('questionNumberTest');
        }, [selectedCity])
    );



    // 🧠 Получаем текущий вопрос по индексу
    const frageDE = testQuestions[questionNumberTest - 1];
    // после прохождения РЕЗУЛЬАТЫ
    if (questionNumberTest > testQuestions.length) {
        return (
            <TestResult
                correctCount={correctCount}
                total={testQuestions.length}
                onRestart={() => {
                    setQuestionNumberTest(1);
                    setSelectedOption(null);
                    setCorrectCount(0);

                    const generalIndexes = getRandomIndexes(questionsDE.length, 30);
                    const stateIndexes = getRandomIndexes(questionsStateDE[selectedCity].length, 3);
                    const general = generalIndexes.map(i => questionsDE[i]);
                    const state = stateIndexes.map(i => questionsStateDE[selectedCity][i]);
                    setTestQuestions([...general, ...state]);
                }}
            />
        );
    }

    if (!frageDE || frageDE.question_number == null) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', marginTop: 100 }}>
                    Вопросы загружаются...
                </Text>
            </View>
        );
    }
    const key = `${selectedCity}_${frageDE.question_number}`;


    const imageSource =
        'source' in frageDE
            ? imageMapState[key]
            : imageMap[frageDE.question_number];


    if (testQuestions.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', marginTop: 100 }}>Загрузка теста...</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f4f4f4' : '#1c1c1e' }]}>
            <ScrollView
                key={questionNumberTest}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <QuestionTest
                    germanText={frageDE.question}
                    questionNumber={questionNumberTest}
                    couuntAllFragen={testQuestions.length} // всего 33
                />

                {frageDE.options.map((option, index) => (
                    <AnswerTest
                        key={index + 1}
                        id={index + 1}
                        selected={selectedOption === index + 1}
                        onSelect={(id) => {
                            if (selectedOption !== null) return;
                            setSelectedOption(id);

                            const userAnswer = frageDE.options[id - 1];
                            const updated = compareAndCount(userAnswer, frageDE.answer, correctCount);
                            setCorrectCount(updated);
                            setTimeout(() => {
                                setQuestionNumberTest((prev) => prev + 1);
                                setSelectedOption(null);
                            }, 500);
                        }}
                        germanText={option}
                        answer={frageDE.answer}
                    />
                ))}

                {/* Если к вопросу есть картинка — показываем */}
                {frageDE.image && imageMap[frageDE.question_number] && (
                    <View
                        style={{
                            width: SCREEN_WIDTH - 20,
                            height: 150,
                            alignSelf: 'center',
                            overflow: 'hidden',
                            marginTop: 20,
                            marginBottom: 16,
                            borderRadius: 8,
                        }}
                    >
                        <Image
                            source={imageSource}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode="contain"
                        />
                    </View>
                )}
            </ScrollView>

        </View>
    );
}

// 🎨 Стили
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingTop: 50,
        paddingHorizontal: 16,
        paddingBottom: 100,
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
        paddingVertical: 35,
        paddingHorizontal: 10,
        gap: 8,
    },
    navButton: {
        backgroundColor: '#4e4cff',
        padding: 10,
        borderRadius: 8,
        left: 250,
    },
    restartButton: {
        backgroundColor: '#4e4cff',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
    },

});
