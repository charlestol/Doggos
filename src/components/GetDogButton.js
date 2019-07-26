import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native'; 

const GetDogButton = ({loading, children, onPress}) => (
    <TouchableOpacity 
        onPress={onPress} 
        disabled={loading}
        style={styles.button} 
    >
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', fontWeight: 'bold' }}>{loading ? 'Loading...' : children}</Text>
    </TouchableOpacity>
);

export default GetDogButton;

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: '#F5866E',
        borderRadius: 15
    }
});