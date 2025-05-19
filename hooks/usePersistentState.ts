import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

/**
 * Хук для создания состояния, сохраняемого в AsyncStorage
 * @param key Ключ, по которому сохраняется значение
 * @param initialValue Начальное значение, если в AsyncStorage ничего нет
 */
export function usePersistentState<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);
    const [isLoaded, setIsLoaded] = useState(false);

    // Загрузка из AsyncStorage при первом рендере
    useEffect(() => {
        const load = async () => {
            try {
                const savedValue = await AsyncStorage.getItem(key);
                if (savedValue !== null) {
                    setValue(JSON.parse(savedValue));
                }
            } catch (error) {
                console.error('Ошибка при загрузке из AsyncStorage:', error);
            } finally {
                setIsLoaded(true);
            }
        };

        load();
    }, [key]);

    // Сохраняем значение при каждом изменении
    useEffect(() => {
        if (isLoaded) {
            AsyncStorage.setItem(key, JSON.stringify(value)).catch((error) => {
                console.error('Ошибка при сохранении в AsyncStorage:', error);
            });
        }
    }, [key, value, isLoaded]);

    return [value, setValue] as const;
}
