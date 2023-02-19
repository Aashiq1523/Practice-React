import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EmployeePanel from '../../EmployeePanel/EmployeePanel';
import CompanyPanel from '../../CompanyPanel/CompanyPanel';

const RightSidePanel = (props) => {

    const [formData, setFormData] = useState([]);
    
    const setData = (data) => {        
        setFormData(data);
    }

    const {isBoolean} = props;

    return (
        <View style = {style.box}>                       
        { 
            isBoolean ? <CompanyPanel isBoolean = {isBoolean} formData = {formData} setFormData = {setData}/> 
                      : <EmployeePanel isBoolean = {isBoolean} formData = {formData} setFormData = {setData}/>
        }
        </View>
    );
}

const style = StyleSheet.create({
    box: {        
        height: hp('100%'),
        width: wp('79.9%'),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
    }
});

export default RightSidePanel;