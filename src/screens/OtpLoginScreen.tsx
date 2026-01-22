import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

type OtpMethod = 'email' | 'mobile' | null;

const OtpLoginScreen = () => {
  const navigation = useNavigation<any>();
  const [method, setMethod] = useState<OtpMethod>(null);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const onSubmitPressed = () => {
    navigation.navigate('Otp');
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
        <Text style={styles.subtitle}>Select one on which you want to receive OTP</Text>

        <Pressable
          onPress={() => setMethod('email')}
          style={[
            styles.optionButton,
            method === 'email' ? styles.optionButtonSelected : null,
          ]}
        >
          <Text
            style={[
              styles.optionText,
              method === 'email' ? styles.optionTextSelected : null,
            ]}
          >
            Get an OTP in your Email
          </Text>
        </Pressable>

        {method === 'email' ? (
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Email ID</Text>
            <CustomInput
              placeholder="Enter Email id"
              value={email}
              setValue={setEmail}
            />
          </View>
        ) : null}

        <View style={styles.orRow}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        <Pressable
          onPress={() => setMethod('mobile')}
          style={[
            styles.optionButton,
            method === 'mobile' ? styles.optionButtonSelected : null,
          ]}
        >
          <Text
            style={[
              styles.optionText,
              method === 'mobile' ? styles.optionTextSelected : null,
            ]}
          >
            Get an OTP in your Mobile no.
          </Text>
        </Pressable>

        {method === 'mobile' ? (
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Mobile No.</Text>
            <CustomInput
              placeholder="Enter mobile no."
              value={mobile}
              setValue={setMobile}
            />
          </View>
        ) : null}

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
  optionButton: {
    borderWidth: 1,
    borderColor: '#5C5B8A',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  optionButtonSelected: {
    borderColor: '#FF5C8D',
  },
  optionText: {
    color: '#5C5B8A',
    fontWeight: '600',
  },
  optionTextSelected: {
    color: '#FF5C8D',
  },
  inputBlock: {
    marginTop: 8,
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D7D9E7',
  },
  orText: {
    marginHorizontal: 10,
    color: '#9AA0B5',
    fontWeight: 'bold',
  },
  submitWrap: {
    marginTop: 14,
  },
});

export default OtpLoginScreen;
