import React from 'react';
import { View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CompanyGrid from '../CompanyGrid/CompanyGrid';
import CompanyForm from '../CompanyForm/CompanyForm';

const CompanyPanel = (props) => {

    const {isBoolean, formData, setFormData} = props;

    return (
        <View style = {style.box}>
            <CompanyGrid isBoolean = {isBoolean} setFormData = {setFormData}/>
            <CompanyForm formData = {formData}/>            
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

export default CompanyPanel;