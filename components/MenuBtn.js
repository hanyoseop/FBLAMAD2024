import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const MenuBtn = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Image
                source={require('../assets/icons/main-menu-icon.png')}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 35,
        height: 35,
    },
    image: {
        width: 35,
        height: 35,
        resizeMode: 'stretch',
    }
});

export default MenuBtn;