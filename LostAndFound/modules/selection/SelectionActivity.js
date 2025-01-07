import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import SelectionPresenter from './SelectionPresenter';

const SelectionActivity = ({ navigation }) => {
    // Создаем презентер
    const presenter = new SelectionPresenter({
        navigateToLogin: () => navigation.navigate('Login'),
        navigateToSignUp: () => navigation.navigate('SignUp'),
    });

    return (
        <View style={styles.container}>
            <Button title="Login" onPress={() => presenter.onLoginPressed()} />
            <Button title="Sign Up" onPress={() => presenter.onSignUpPressed()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    button: {
        marginVertical: 10,
    },
});

export default SelectionActivity;

