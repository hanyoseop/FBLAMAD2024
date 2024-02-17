import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const ActivityCard = () => {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.title}>FBLA Officer</Text>
            <Text style={styles.dateRange}>2024 Aug 5 to 2025 May 25</Text>
            <Text style={styles.description}>Committed as the official member of the JCHS FBLA Chapter</Text>
            <View style={styles.tagIndicator}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'lightgray',

        elevation: 5,

        backgroundColor: 'whitesmoke',


        padding: 20,
    },
    title: {
        fontSize: 24,
    },
    dateRange: {
        fontSize: 16,
        color: 'gray',
    },
    description: {
        fontSize: 12,
    },
    tagIndicator: {

    }
});

export default ActivityCard;