import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const ProfileBtn = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Image
                source={require('../assets/icons/empty-profile-picture.png')}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 55,
        height: 55,
    },
    image: {
        width: 55,
        height: 55,
        resizeMode: 'stretch',
    }
});

export default ProfileBtn;