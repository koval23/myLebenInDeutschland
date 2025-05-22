import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SCREEN_WIDTH = Dimensions.get('window').width;

type Props = {
    id: number;
    selected: boolean; // 👈 мы получаем выбран ли этот вариант извне
    onSelect: (id: number) => void;
    germanText: string;
    answer: string;
};

export function AnswerTest({ id, selected, onSelect, germanText, answer }: Props) {

    return (
        <TouchableOpacity onPress={() => onSelect(id)} activeOpacity={0.9}>
            <View style={styles.wrapper}>
                <BouncyCheckbox
                    isChecked={selected}
                    useBuiltInState={false}
                    onPress={() => onSelect(id)}
                    size={25}
                    fillColor={'black'}
                    unFillColor="#FFFFFF"
                    iconStyle={{ borderColor: 'black' }}
                    innerIconStyle={{ borderWidth: 2 }}
                    disableText
                />
                <View style={styles.textBox}>
                    <Text style={styles.optionText}>{germanText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 6,
        padding: 10,
        width: SCREEN_WIDTH - 20,
        alignSelf: 'center',
    },
    textBox: {
        marginLeft: 10,
        flexShrink: 1,
    },
    optionText: {
        fontSize: 16,
        color: '#222',
    },
    translationText: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },
});
