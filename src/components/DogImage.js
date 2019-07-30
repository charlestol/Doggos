import React from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DogImage = ({ image, isLoading, error }) => (
    <View styles={styles.container}>
        {!image && !isLoading && <MaterialCommunityIcons name="dog" size={80} color="brown" />}
        {image && <Image source={{uri: image}} style={{width: 400,height: 400,resizeMode: 'contain', margin: 20}} />}
        {error && <Text style={{fontWeight: 'bold'}}>{JSON.stringify(error)}</Text>}
        {isLoading && <ActivityIndicator size="large" color="brown" style={styles.loading}/>}
    </View>
);

export default DogImage;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    loading: {
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
});
