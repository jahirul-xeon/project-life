import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.svg';
import { AntDesign, FontAwesome6, Ionicons } from '@expo/vector-icons';

type StatCardProps = {
  count: number;
  label: string;
};

const StatCard = ({ count, label }: StatCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={styles.cardCount}>{count}</Text>
        <Text style={styles.cardLabel}>{label}</Text>
      </View>
      <View style={styles.cardIcon}>
       <FontAwesome6 name="user-doctor" size={24} color="#FF5C8D" />
        <View style={styles.cardIconBadge}>
          <Text style={styles.cardIconText}>+</Text>
        </View>
      </View>
    </View>
  );
};

const AdminDashboardScreen = () => {
  const navigation = useNavigation<any>();
  const stats = [
    { count: 3, label: 'Labouring Patients' },
    { count: 25, label: 'High Risk Patients' },
    { count: 50, label: 'Vaginal Deliveries' },
    { count: 20, label: 'Surgical Deliveries' },
  ];

  return (
    <View style={styles.page}>
      <View style={styles.topBar}>
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={styles.menu}
        >
          <AntDesign name="menu" size={24} color="#FF5C8D" />
        </Pressable>

        <View style={styles.brand}>
          <Logo width={44} height={44} />
          <Text style={styles.brandText}>Apollo Hospital</Text>
        </View>

        <View style={styles.bellWrap}>
          <View style={styles.bell}>
            <Text style={styles.bellText}>!</Text>
          </View>
          <View style={styles.bellDot} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Text style={styles.welcome}>Welcome! Riya Bhardwaj</Text>

        <View style={styles.cardList}>
          {stats.map((item) => (
            <StatCard key={item.label} count={item.count} label={item.label} />
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E7ECF5',
  },
  menu: {
    width: 38,
    height: 28,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 3,
    borderRadius: 2,
    backgroundColor: '#FF5C8D',
    width: 28,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 12,
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2B2B2B',
  },
  bellWrap: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bell: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F1F3F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellText: {
    color: '#9AA0B5',
    fontWeight: 'bold',
  },
  bellDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF5C8D',
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 120,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B2B2B',
    marginBottom: 14,
  },
  cardList: {
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  cardLeft: {
    flex: 1,
  },
  cardCount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF5C8D',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 18,
    color: '#2B2B2B',
    fontWeight: '600',
  },
  cardIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF5C8D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIconBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFE0EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIconText: {
    color: '#FF5C8D',
    fontWeight: 'bold',
  },
});

export default AdminDashboardScreen;
