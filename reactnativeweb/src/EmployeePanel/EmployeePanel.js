import React from 'react';
import { View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EmployeeGrid from '../EmployeeGrid/EmployeeGrid';
import EmployeeForm from '../EmployeeForm/EmployeeForm';

const EmployeePanel = (props) => {

    const {isBoolean, formData, setFormData} = props;

    return (
        <View style = {style.box}>
            <EmployeeGrid isBoolean = {isBoolean} setFormData = {setFormData}/>
            <EmployeeForm formData = {formData}/>            
        </View>
    );
}

const style = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'column', 
        height: hp('100%'),
        width: wp('79.9%'),
    }
});

export default EmployeePanel;