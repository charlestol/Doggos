import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { loadDogs } from '../actions';
import GetDogsButton from '../components/GetDogButton';

const GetDogsButtonContainer = ({isLoading, loadDogs}) => (
    <View style={{ width: 160, flex: 1, justifyContent: 'flex-end', marginBottom: 40 }}>
        <GetDogsButton
            onPress={() => !isLoading && loadDogs()}
            loading={isLoading}
        >
            Get Doggos!
        </GetDogsButton>   
    </View>
);

const mapStateToProps = ({isLoading}) => ({
    isLoading,
});

const mapDispatchToProps = dispatch => ({
    loadDogs: () => dispatch(loadDogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(GetDogsButtonContainer)

