import React from 'react';
import { View, StyleSheet } from 'react-native';
import DogImage from '../src/containers/DogImage';
import GetDogButton from '../src/containers/GetDogButtonContainer';

const DogApp = () => (
    <View style={styles.container}>
        <DogImage />
        <GetDogButton />
    </View>
);

export default DogApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
