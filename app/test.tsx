import { Ionicons } from '@expo/vector-icons';
import { useState, useCallback } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { AnswerTest } from '@/components/AnswerTest';
import { QuestionTest } from '@/components/QuestionTest';
import { compareAndCount, goToNextQuestionTest } from '@/constants/Functions';
import { questionsDE, questionsStateDE } from '@/constants/Question'; // массив из 300 общих вопросов
import { QuestionDE } from '@/constants/Types';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TestResult } from '@/components/Result';



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

// 🔁 Функция для генерации массива случайных индексов (уникальные)
function getRandomIndexes(length: number, count: number): number[] {
    const indexes = Array.from({ length }, (_, i) => i);
    const shuffled = indexes.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export default function TestScreen() {
    const theme = useColorScheme() ?? 'light';
    // const [questionNumberTest, setQuestionNumberTest] = usePersistentState<number>('questionNumberTest', 1); // текущий номер вопроса
    const [questionNumberTest, setQuestionNumberTest] = useState<number>(1);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [correctCount, setCorrectCount] = useState<number>(0); // количество правильных ответов

    const selectedBundesland = 'berlin'; // пока хардкодим, позже заменим на динамичный выбор
    const [testQuestions, setTestQuestions] = useState<QuestionDE[]>([]);

    useFocusEffect(
        useCallback(() => {
            // Генерируем новые вопросы при заходе
            const generalIndexes = getRandomIndexes(questionsDE.length, 30);
            const stateIndexes = getRandomIndexes(questionsStateDE[selectedBundesland].length, 3);
            const general = generalIndexes.map(i => questionsDE[i]);
            const state = stateIndexes.map(i => questionsStateDE[selectedBundesland][i]);
            const combined = [...general, ...state];

            setTestQuestions(combined);

            // Сброс состояния
            setSelectedOption(null);
            setQuestionNumberTest(1);
            AsyncStorage.removeItem('questionNumberTest');

            // return () => {
            //   // Доп. очистка при уходе (если надо)
            // };
        }, [])
    );

    // 🧠 Получаем текущий вопрос по индексу
    const frageDE = testQuestions[questionNumberTest - 1];

    if (testQuestions.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', marginTop: 100 }}>Загрузка теста...</Text>
            </View>
        );
    }
    // после прохождения
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
                    const stateIndexes = getRandomIndexes(questionsStateDE[selectedBundesland].length, 3);
                    const general = generalIndexes.map(i => questionsDE[i]);
                    const state = stateIndexes.map(i => questionsStateDE[selectedBundesland][i]);
                    setTestQuestions([...general, ...state]);
                }}
            />
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
                            }, 1000);
                        }}
                        germanText={option}
                        answer={frageDE.answer}
                    />
                ))}


                {/* <AnswerTest
                    key={1}
                    id={1}
                    selected={selectedOption === 1}
                    onSelect={(id) => {
                        if (selectedOption !== null) return;

                        setSelectedOption(id);

                        const userAnswer = frageDE.options[0];
                        const updated = compareAndCount(userAnswer, frageDE.answer, correctCount);
                        setCorrectCount(updated);

                        // ⏳ Автоматически переходим на следующий вопрос через 1 секунду
                        setTimeout(() => {
                            // goToNextQuestionTest(setQuestionNumberTest);
                            setQuestionNumberTest((prev) => prev + 1);

                            setSelectedOption(null);
                        }, 1000);
                    }}

                    germanText={frageDE.options[0]}
                    answer={frageDE.answer}
                />
                <AnswerTest
                    key={2}
                    id={2}
                    selected={selectedOption === 2}
                    onSelect={(id) => {
                        if (selectedOption !== null) return;

                        setSelectedOption(id);

                        const userAnswer = frageDE.options[1];
                        const updated = compareAndCount(userAnswer, frageDE.answer, correctCount);
                        setCorrectCount(updated);

                        // ⏳ Автоматически переходим на следующий вопрос через 1 секунду
                        setTimeout(() => {
                            // goToNextQuestionTest(setQuestionNumberTest);
                            setQuestionNumberTest((prev) => prev + 1);

                            setSelectedOption(null);
                        }, 1000);
                    }}

                    germanText={frageDE.options[1]}
                    answer={frageDE.answer}
                />
                <AnswerTest
                    key={3}
                    id={3}
                    selected={selectedOption === 3}
                    onSelect={(id) => {
                        if (selectedOption !== null) return;

                        setSelectedOption(id);

                        const userAnswer = frageDE.options[2];
                        const updated = compareAndCount(userAnswer, frageDE.answer, correctCount);
                        setCorrectCount(updated);

                        // ⏳ Автоматически переходим на следующий вопрос через 1 секунду
                        setTimeout(() => {
                            // goToNextQuestionTest(setQuestionNumberTest);
                            setQuestionNumberTest((prev) => prev + 1);

                            setSelectedOption(null);
                        }, 1000);
                    }}

                    germanText={frageDE.options[2]}
                    answer={frageDE.answer}
                />
                <AnswerTest
                    key={4}
                    id={4}
                    selected={selectedOption === 4}
                    onSelect={(id) => {
                        if (selectedOption !== null) return;

                        setSelectedOption(id);

                        const userAnswer = frageDE.options[3];
                        const updated = compareAndCount(userAnswer, frageDE.answer, correctCount);
                        setCorrectCount(updated);

                        // ⏳ Автоматически переходим на следующий вопрос через 1 секунду
                        setTimeout(() => {
                            //   goToNextQuestionTest(setQuestionNumberTest);
                            setQuestionNumberTest((prev) => prev + 1);
                            setSelectedOption(null);
                        }, 1000);
                    }}

                    germanText={frageDE.options[3]}
                    answer={frageDE.answer}
                /> */}

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
                            source={imageMap[frageDE.question_number]}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode="contain"
                        />
                    </View>
                )}
            </ScrollView>

            {/* Кнопка "вперёд" */}
            <View style={styles.footer}>

                <TouchableOpacity
                    style={[
                        styles.navButton,
                        { backgroundColor: selectedOption === null ? '#aaa' : '#4e4cff' }, // цвет меняется
                    ]}
                    onPress={() => {
                        if (selectedOption === null) return; // запрет перехода без выбора
                        goToNextQuestionTest(setQuestionNumberTest);
                        setSelectedOption(null); // сбрасываем выбор на следующем вопросе
                    }}
                    disabled={selectedOption === null} // запрет клика
                >
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>

            </View>
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
