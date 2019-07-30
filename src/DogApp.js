import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import DogImage from '../src/containers/DogImageContainer';
import GetDogButton from '../src/containers/GetDogButtonContainer';
import Header from '../src/components/Header';

const DogApp = () => (
    <SafeAreaView style={styles.container}>
        <Header />
        <DogImage />
        <GetDogButton />
    </SafeAreaView>
);

export default DogApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
