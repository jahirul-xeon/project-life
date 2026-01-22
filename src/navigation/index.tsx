import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import OtpLoginScreen from '../screens/OtpLoginScreen';
import OtpScreen from '../screens/OtpScreen';
import AdminDashboardScreen from '../screens/AdminDashboardScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const PatientsScreen = () => <PlaceholderScreen title="Patients" />;
const RoundScreen = () => <PlaceholderScreen title="Round" />;
const AccountScreen = () => <PlaceholderScreen title="Account" />;
const AddScreen = () => <PlaceholderScreen title="Add" />;

const AddTabButton = ({ onPress }: { onPress?: (event: any) => void }) => (
    <Pressable onPress={onPress} style={styles.addButtonWrap}>
        <View style={styles.addButton}>
            <Ionicons name="add" size={30} color="#FFFFFF" />
        </View>
    </Pressable>
);

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#FF5C8D',
                tabBarInactiveTintColor: '#A7ADBF',
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Add') {
                        return <Ionicons name="add" size={size} color={color} />;
                    }
                    const iconName =
                        route.name === 'Home'
                            ? focused
                                ? 'home'
                                : 'home-outline'
                            : route.name === 'Patients'
                            ? focused
                                ? 'people'
                                : 'people-outline'
                            : route.name === 'Round'
                            ? focused
                                ? 'pie-chart'
                                : 'pie-chart-outline'
                            : focused
                            ? 'person'
                            : 'person-outline';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={AdminDashboardScreen} />
            <Tab.Screen name="Patients" component={PatientsScreen} />
            <Tab.Screen
                name="Add"
                component={AddScreen}
                options={{
                    tabBarLabel: '',
                    tabBarButton: (props) => <AddTabButton onPress={props.onPress} />,
                }}
            />
            <Tab.Screen name="Round" component={RoundScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

const AppDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: { width: 300 },
                drawerType: 'front',
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={HomeTabs} />
            <Drawer.Screen name="Patients" component={PatientsScreen} />
            <Drawer.Screen name="Round" component={RoundScreen} />
            <Drawer.Screen name="Account" component={AccountScreen} />
        </Drawer.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="OtpLogin" component={OtpLoginScreen} />
                <Stack.Screen name="Otp" component={OtpScreen} />
                <Stack.Screen name="App" component={AppDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        paddingBottom: 8,
        paddingTop: 8,
        borderTopColor: '#E7ECF5',
        borderTopWidth: 1,
        backgroundColor: '#FFFFFF',
    },
    tabBarLabel: {
        fontSize: 12,
        fontWeight: '600',
    },
    addButtonWrap: {
        top: -20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FF5C8D',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 4,
    },
});
