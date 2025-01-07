import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeActivity = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Добро пожаловать в Потеряшку!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeActivity;
