import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const DogImage = ({ dogs, error }) => (
    <View style={{alignItems: 'center'}}>
        {dogs && <Image source={{uri: dogs}} style={{width: 400,height: 400,resizeMode: 'contain'}} />}
        {error && <Text>{JSON.stringify(error)}</Text>}
    </View>
);

const mapStateToProps = ({dogs,error}) => ({
    dogs,
    error,
});

export default connect(mapStateToProps)(DogImage);
