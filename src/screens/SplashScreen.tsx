import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.svg';
const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    const navigation = useNavigation<any>();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        // Animation Sequence
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),
        ]).start();

        // Navigate to Login after 3 seconds
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            {/* Top Decoration */}
            <Image
                source={require('../assets/splash/splash_top.png')}
                style={styles.topImage}
                resizeMode="contain"
            />

            {/* Center Animated Logo */}
            <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
                <Logo width={width * 0.4} height={height * 0.2} style={styles.logo} />
            </Animated.View>

            {/* Center Animated Logo */}
            <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
                <Image
                    source={require('../assets/splash/center_icon.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </Animated.View>

            {/* Bottom Decoration */}
            <Image
                source={require('../assets/splash/splash_bottom.png')}
                style={styles.bottomImage}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBFB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topImage: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: width * 0.5,
        height: height * 0.2,
    },
    logo: {
        width: width * 0.2,
        height: width * 0.2,
    },
    icon: {
        width: width * 0.4,
        height: width * 0.4,
    },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: width * 0.5,
        height: height * 0.2,
    },
});

export default SplashScreen;
