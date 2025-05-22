import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

type Props = {
    germanText: string;         // Текст на немецком
    questionNumber: number;
    couuntAllFragen: number
};

export function QuestionTest({
    germanText,
    questionNumber,
    couuntAllFragen,
}: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.questionCount}>{questionNumber}/{couuntAllFragen}</Text>
            <View style={styles.wrapper}>
                {/* Немецкий текст */}
                <Text style={styles.germanText}>{germanText}</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        // backgroundColor: 'white',         // Белый фон
        // borderRadius: 10,                 // Скруглённые углы
        marginVertical: 10,               // Отступ сверху и снизу
        padding: 16,                      // Внутренние отступы
        width: SCREEN_WIDTH - 20,         // Почти во всю ширину экрана
        alignSelf: 'center',              // Центровка по горизонтали
        alignItems: 'center',             // Центровка контента по центру
    },
    germanText: {
        fontSize: 20,                     // Крупный текст на немецком
        fontWeight: '600',               // Полужирный
        textAlign: 'center',             // Центровка
        color: '#222',
    },
    russianText: {
        fontSize: 18,                     // Немного меньше чем немецкий
        fontStyle: 'italic',             // Курсив
        color: '#666',
        marginTop: 8,                    // Отступ сверху
        textAlign: 'center',             // Центровка
    },
    questionCount: {
        color: '#6a6a6a',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        // width: SCREEN_WIDTH - 20,
        elevation: 4,
    }
});
