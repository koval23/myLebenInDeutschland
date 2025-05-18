import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';

type Props = {
  value: number;
  onChange: (value: number) => void;
  options: number[];
};

export default function CustomPicker({ value, onChange, options }: Props) {
  const [visible, setVisible] = useState(false);

  const handleSelect = (val: number) => {
    onChange(val);
    setVisible(false);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Вопрос № {value}</Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setVisible(false)} />
        <View style={styles.modal}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  item === value && styles.selectedOption,
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    item === value && styles.selectedOptionText,
                  ]}
                >
                  Вопрос {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
  },
  button: {
    backgroundColor: '#4e4cff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: 300,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 10,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOption: {
    backgroundColor: '#4e4cff22',
  },
  selectedOptionText: {
    color: '#4e4cff',
    fontWeight: '600',
  },
});
