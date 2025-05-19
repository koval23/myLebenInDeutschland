import { usePersistentState } from '@/hooks/usePersistentState'; // путь подстрой под свой проект
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const languages = [
    { label: 'Русский', value: 'ru' },
    { label: 'Türkçe', value: 'tr' },
    { label: 'English', value: 'en' },
];

export default function LanguageSelector() {
    // const [selectedLanguage, setSelectedLanguage] = useState<string>('ru');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = usePersistentState<string>('language', 'ru');


    const handleSelectLanguage = (value: string) => {
        setSelectedLanguage(value);
        setModalVisible(false);
    };

    return (
        <View style={styles.dropdownWrapper}>
            <TouchableOpacity style={styles.languageButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.languageButtonText}>
                    Язык: {languages.find(l => l.value === selectedLanguage)?.label}
                </Text>
            </TouchableOpacity>

            <Modal transparent visible={modalVisible} animationType="fade">
                <Pressable style={styles.overlay} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        {languages.map((lang) => (
                            <TouchableOpacity key={lang.value} style={styles.option} onPress={() => handleSelectLanguage(lang.value)}>
                                <Text style={styles.optionText}>{lang.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    dropdownWrapper: {
        marginBottom: 20,
        alignItems: 'center',
    },
    languageButton: {
        backgroundColor: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    languageButtonText: {
        fontSize: 16,
        color: '#333',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        minWidth: 200,
    },
    option: {
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});
