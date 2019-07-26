import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loadDogs } from '../actions';
import GetDogsButton from '../components/GetDogButton';

const DogImage = ({ dogs, isLoading, error, loadDogs }) => (
    <View style={styles.container}>
        {dogs && <Image source={{uri: dogs}} style={{width: 400,height: 400,resizeMode: 'contain'}} />}
        {error && <Text>{JSON.stringify(error)}</Text>}
        <View style={{ width: 160, flex: 1, justifyContent: 'flex-end', marginBottom: 60 }}>
            <GetDogsButton
                onPress={() => !isLoading && loadDogs()}
                loading={isLoading}
            >
                Get Doggos!
            </GetDogsButton>   
        </View>
    </View>
);

const mapStateToProps = ({dogs,isLoading,error}) => ({
    dogs,
    isLoading,
    error
});

const mapDispatchToProps = dispatch => ({
    loadDogs: () => dispatch(loadDogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(DogImage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 200
    }
});