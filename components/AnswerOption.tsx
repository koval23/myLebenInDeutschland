import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SCREEN_WIDTH = Dimensions.get('window').width;

type Props = {
  id: number;
  selected: boolean;
  onSelect: (id: number) => void;
  showTranslation: boolean;
  germanText: string;
  russianText: string;
  answer: string;
};

export function AnswerOption({
  id,
  selected,
  onSelect,
  showTranslation,
  germanText,
  russianText,
  answer,
}: Props) {
  const [checked, setChecked] = useState(false);

  const getCheckboxColor = () => {
    if (!checked) return 'black';
    return germanText === answer ? 'green' : 'red';
  };

  const handlePress = () => {
    setChecked(true);
    onSelect(id);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <View style={styles.wrapper}>
        <BouncyCheckbox
          isChecked={checked}
          useBuiltInState={false}
          onPress={handlePress} // 👈 нажимаем прямо по чекбоксу
          size={25}
          fillColor={getCheckboxColor()}
          unFillColor="#FFFFFF"
          iconStyle={{ borderColor: getCheckboxColor() }}
          innerIconStyle={{ borderWidth: 2 }}
          disableText
        />

        <View style={styles.textBox}>
          <Text style={styles.optionText}>{germanText}</Text>
          {showTranslation && (
            <Text style={styles.translationText}>{russianText}</Text>
          )}
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
