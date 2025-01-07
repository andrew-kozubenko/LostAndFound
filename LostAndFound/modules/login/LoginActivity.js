import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import LoginPresenter from './LoginPresenter';

const LoginActivity = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const presenter = new LoginPresenter(navigation);

    const handleLogin = () => {
        presenter.onLogin(email, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Вход</Text>
            <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
            <CustomInput
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <CustomButton title="Войти" onPress={handleLogin} />
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

export default LoginActivity;
