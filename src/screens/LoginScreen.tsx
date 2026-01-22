import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.svg';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation<any>();

    const onSignInPressed = () => {
        navigation.navigate('App');
    };

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');
    };

    const onSignInWithOtpPressed = () => {
        navigation.navigate('OtpLogin');
    };

    const onSignUpPressed = () => {
        navigation.navigate('Signup');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Logo width={width * 0.7} height={height * 0.3} style={styles.logo} />

                <Text style={styles.header}>Login</Text>

                <Text style={styles.label}>Email ID</Text>
                <CustomInput
                    placeholder="Enter Email id"
                    value={email}
                    setValue={setEmail}
                />

                <Text style={styles.label}>Password</Text>
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <View style={{ alignSelf: 'flex-end' }}>
                    <CustomButton
                        text="Forgot Password"
                        onPress={onForgotPasswordPressed}
                        type="TERTIARY"
                    />
                </View>

                <CustomButton text="Log In" onPress={onSignInPressed} bgColor="#FF5C8D" />

                <Text style={{ textAlign: 'center', marginVertical: 10, color: 'gray' }}>OR</Text>

                <CustomButton
                    text="Login with OTP"
                    onPress={onSignInWithOtpPressed}
                    type="SECONDARY"
                    bgColor="white"
                    fgColor="black"
                />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type="TERTIARY"
                />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2F3C7E',
        marginBottom: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF5C8D',
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    label: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginBottom: 5,
    }
});

export default LoginScreen;
