import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

// Import components
import ProfileBtn from '../components/ProfileBtn.js';
import MenuBtn from '../components/MenuBtn.js';
import ActivityCard from '../components/ActivityCard.js';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <MenuBtn/>
                <View style={styles.profile}>
                    <Text style={styles.username}>Yoseop H.</Text>
                    <ProfileBtn/>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyTitle}>Your Portfolio</Text>
                <ActivityCard/>
                <ActivityCard/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        fontSize: 28,
        fontWeight: '300',
        paddingHorizontal: 15,
    },
    body: {
        paddingHorizontal: 20,
        gap: 10
    },
    bodyTitle: {
        fontSize: 32,
        fontWeight: '200',
    }
});

export default HomeScreen;