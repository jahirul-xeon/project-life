import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.svg';

const SignupScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { height, width } = useWindowDimensions();
    const navigation = useNavigation<any>();

    const onRegisterPressed = () => {
        console.warn('Sign Up');
    };

    const onSignInPressed = () => {
        navigation.navigate('Login');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Logo width={width * 0.7} height={height * 0.25} style={styles.logo} />

                <Text style={styles.header}>Sign Up</Text>

                <Text style={styles.label}>Full Name</Text>
                <CustomInput
                    placeholder="Enter Name"
                    value={name}
                    setValue={setName}
                />

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

                <Text style={styles.label}>Confirm Password</Text>
                <CustomInput
                    placeholder="Confirm Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />

                <CustomButton text="Sign Up" onPress={onRegisterPressed} bgColor="#FF5C8D" />

                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPressed}
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

export default SignupScreen;
