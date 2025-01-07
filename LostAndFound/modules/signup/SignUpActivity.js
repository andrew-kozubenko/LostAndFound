import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignUpPresenter from './SignUpPresenter';

const SignUpActivity = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const presenter = new SignUpPresenter(navigation);

    const handleSignUp = () => {
        presenter.onSignUp(email, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Регистрация</Text>
            <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
            <CustomInput
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <CustomButton title="Зарегистрироваться" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default SignUpActivity;

