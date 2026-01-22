import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

const OTP_LENGTH = 4;

const OtpScreen = () => {
  const navigation = useNavigation<any>();
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const onChangeDigit = (index: number, value: string) => {
    const next = [...otp];
    next[index] = value.replace(/[^0-9]/g, '').slice(-1);
    setOtp(next);
  };

  const onSubmitPressed = () => {
    console.warn('Submit OTP');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
      <View style={styles.root}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#FF5C8D" />
          </Pressable>
        </View>

        <Text style={styles.header}>OTP</Text>
        <Text style={styles.subtitle}>We have sent an OTP on your Email.</Text>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={`otp-${index}`}
              style={[
                styles.otpBox,
                focusedIndex === index ? styles.otpBoxActive : null,
              ]}
              value={digit}
              onChangeText={(value) => onChangeDigit(index, value)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              keyboardType="number-pad"
              maxLength={1}
              placeholder="*"
              placeholderTextColor="#B9BDD3"
              textAlign="center"
            />
          ))}
        </View>

        <Text style={styles.timer}>00:27</Text>

        <View style={styles.submitWrap}>
          <CustomButton text="Submit" onPress={onSubmitPressed} bgColor="#FF5C8D" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  root: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  topBar: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7F1',
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  backButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    color: '#FF5C8D',
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5C8D',
    marginBottom: 6,
  },
  subtitle: {
    color: '#444',
    marginBottom: 18,
  },
  otpRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 10,
    marginBottom: 14,
  },
  otpBox: {
    width: 46,
    height: 46,
    borderWidth: 1,
    borderColor: '#C9CDE0',
    borderRadius: 6,
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  otpBoxActive: {
    borderColor: '#FF5C8D',
  },
  timer: {
    textAlign: 'center',
    color: '#222',
    marginBottom: 20,
  },
  submitWrap: {
    marginTop: 6,
  },
});

export default OtpScreen;
