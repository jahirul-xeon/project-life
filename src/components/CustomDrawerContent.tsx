import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Switch,
  Platform,
  StatusBar,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '../assets/logo.svg';

const BRAND_NAME = 'Apollo Hospital';

type MenuItemProps = {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
  right?: React.ReactNode;
  showChevron?: boolean;
};

const MenuItem = ({ icon, title, onPress, right, showChevron }: MenuItemProps) => {
  const content = (
    <>
      <View style={styles.menuLeft}>
        {icon}
        <Text style={styles.menuText} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>

      <View style={styles.menuRight}>
        {right}
        {showChevron ? (
          <Ionicons name="chevron-forward" size={20} color="#C3C7D5" />
        ) : null}
      </View>
    </>
  );

  if (!onPress) {
    return <View style={styles.menuItem}>{content}</View>;
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}
      android_ripple={{ color: 'rgba(0,0,0,0.06)' }}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      {content}
    </Pressable>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const insets = useSafeAreaInsets();

  const [dutyEnabled, setDutyEnabled] = useState(true);
  const [notifEnabled, setNotifEnabled] = useState(true);

  const headerTopPad = useMemo(() => {
    const androidExtra = Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;
    return Math.max(insets.top, androidExtra) + 12;
  }, [insets.top]);

  // No useCallback — simple inline functions
  const closeDrawer = () => props.navigation.closeDrawer();

  const goAccount = () => props.navigation.navigate('Account' as never);

  const logout = () => {
    props.navigation.closeDrawer();
    props.navigation.getParent()?.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={[styles.header, { paddingTop: headerTopPad }]}>
          <Pressable
            style={({ pressed }) => [styles.closeButton, pressed && styles.closePressed]}
            onPress={closeDrawer}
            android_ripple={{ color: 'rgba(255,255,255,0.18)' }}
            accessibilityRole="button"
            accessibilityLabel="Close drawer"
            hitSlop={8}
          >
            <Ionicons name="close" size={20} color="#FFFFFF" />
          </Pressable>

          <View style={styles.brandRow}>
            <View style={styles.logoCard} accessible accessibilityLabel="App logo">
              <Logo width={44} height={44} />
            </View>

            <Text style={styles.brandText} numberOfLines={1} ellipsizeMode="tail">
              {BRAND_NAME}
            </Text>
          </View>
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Duty */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Duty Status</Text>

            <View style={styles.dutyRow}>
              <Text style={styles.dutyOff}>Off</Text>
              <Switch
                value={dutyEnabled}
                onValueChange={setDutyEnabled}
                trackColor={{ false: '#DDE2EE', true: '#34D399' }}
                thumbColor={dutyEnabled ? '#10B981' : '#FFFFFF'}
                accessibilityLabel="Duty status switch"
              />
              <Text style={styles.dutyOn}>On</Text>
            </View>
          </View>

          {/* Menu */}
          <View style={styles.menu}>
            <MenuItem
              title="Profile Settings"
              onPress={goAccount}
              showChevron
              icon={<Ionicons name="person-outline" size={22} color="#FF5C8D" />}
            />

            <MenuItem
              title="Change Password"
              onPress={goAccount}
              showChevron
              icon={<MaterialCommunityIcons name="lock-outline" size={22} color="#FF5C8D" />}
            />

            <MenuItem
              title="Notification"
              icon={<Feather name="bell" size={22} color="#FF5C8D" />}
              right={
                <Switch
                  value={notifEnabled}
                  onValueChange={setNotifEnabled}
                  trackColor={{ false: '#F1D6DE', true: '#FFC1D3' }}
                  thumbColor={notifEnabled ? '#FF5C8D' : '#FFFFFF'}
                  accessibilityLabel="Notification switch"
                />
              }
            />

            <View style={styles.divider} />

            <MenuItem
              title="Logout"
              onPress={logout}
              icon={<MaterialCommunityIcons name="logout" size={22} color="#FF5C8D" />}
            />
          </View>
        </View>
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 14) }]}>
        <Text style={styles.footerVersion}>Version: 1.0.0</Text>
        <Text style={styles.footerMade}>
          Made with <Text style={styles.heart}>❤</Text> by JIHAN
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },

  scrollContent: {
    paddingBottom: 18,
  },

  header: {
    backgroundColor: '#F04A7D',
    paddingHorizontal: 18,
    paddingBottom: 22,
  },

  closeButton: {
    alignSelf: 'flex-end',
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  closePressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  logoCard: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  brandText: {
    flexShrink: 1,
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },

  body: {
    paddingHorizontal: 18,
    paddingTop: 16,
  },

  section: {
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: '#FAFBFF',
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#EEF1F8',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3A3A3A',
    marginBottom: 10,
  },

  dutyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dutyOff: { color: '#A5A9B8', fontWeight: '700', marginRight: 10 },
  dutyOn: { color: '#2B2B2B', fontWeight: '700', marginLeft: 10 },

  menu: {
    marginTop: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EEF1F8',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  menuItem: {
    minHeight: 52,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  pressed: {
    backgroundColor: 'rgba(0,0,0,0.04)',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#2B2B2B',
    flexShrink: 1,
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEF1F8',
    marginLeft: 14,
  },

  footer: {
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  footerVersion: {
    color: '#A5A9B8',
    marginBottom: 6,
    fontWeight: '600',
  },
  footerMade: {
    color: '#2B2B2B',
    fontWeight: '600',
  },
  heart: { color: '#FF5C8D' },
});

export default CustomDrawerContent;
