import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WelcomePresenter from './WelcomePresenter';

const WelcomeActivity = ({ navigation }) => {
    // Создаем презентер
    const presenter = new WelcomePresenter({
        navigateToSelection: () => navigation.navigate('Selection'),
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to <Text style={styles.subtitle}>потеряшка</Text></Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => presenter.onContinuePressed()}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Центрирование контента
        alignItems: 'center',
        backgroundColor: '#0A2454',
    },
    title: {
        color: '#FFFFFF',
        width: 249,  // Без px
        height: 55,  // Без px
        fontFamily: 'Montserrat',  // Используется fontFamily в camelCase
        fontStyle: 'normal', // Если требуется
        fontWeight: 'bold', // Укажите 'bold' или числовое значение
        fontSize: 45,  // Без px
        lineHeight: 55, // Размер строки
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'Nickainley',
        fontStyle: 'italic',
        fontWeight: '400',
        fontSize: 45,
        lineHeight: 54, // Высота строки равна высоте элемента
        textAlign: 'center',
        color: '#FFFFFF',
    },
    button: {
        width: 318,
        height: 50,
        justifyContent: 'center', // Центрирование текста внутри кнопки
        alignItems: 'center', // Центрирование текста внутри кнопки
        backgroundColor: '#FFFFFF', // Пример фона кнопки
        borderRadius: 5, // Скругленные углы
        marginTop: 40, // Расстояние от предыдущего элемента
    },
    // Стиль для текста внутри кнопки
    buttonText: {
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontWeight: '600',
        fontSize: 25,
        lineHeight: 30,
        textAlign: 'center',
        color: '#0A2454',
    },
});

export default WelcomeActivity;
