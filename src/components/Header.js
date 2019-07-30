import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Infinite Dogs</Text>
        <MaterialCommunityIcons name="dog-side" size={32} color="black" />
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});
