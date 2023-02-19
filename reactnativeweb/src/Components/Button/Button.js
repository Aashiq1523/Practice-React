import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    primary : {
        backgroundColor: '#2fcb53',
        borderColor: '#2fcb53',
        color: '#fff'
    },
});

const button = (props) => {

    const {name, buttonStyle, onClick, textStyle, isDisabled} = props;
    return (
        <View>            
            <TouchableOpacity disabled = {isDisabled} onPress = {onClick} style = {buttonStyle}>
                <Text style = {textStyle}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

button.defaultProps = {
    name: 'Primary',    
    style: styles.primary,  
    disabled: true,     
}

export default button;