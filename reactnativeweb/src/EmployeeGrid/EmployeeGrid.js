import React from 'react';
import { View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomTable from '../CustomTable/CustomTable';
import Button from '../Components/Button/Button';

const EmployeeGrid = (props) => {    

    const {isBoolean, setFormData} = props;

    return(
        <View style = {style.box}> 
            <View>
                <CustomTable isBoolean = {isBoolean} setFormData = {setFormData}/>                                  
            </View>
            <View style = {style.boxButton}>
                <Button name = "AddNewEmployee" 
                        buttonStyle = {style.addNewEmployeeButton}
                        textStyle = {style.text}
                        isDisabled = {false}/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    box: {        
        height: hp('59.9%'),
        width: wp('79.8%'),
        padding: 30,
    },
    boxButton: {
        flexDirection: 'row-reverse',
        height: hp('9.9%'),        
        paddingTop: 20,        
    },
    addNewEmployeeButton: {
        width: wp('9%'),
        height: hp('4%'),        
        backgroundColor: '#20bf6b',
        borderWidth: '2%',
        borderStyle: 'outset',
    },
    text: {
        textAlign: 'center',
        padding: '4%',
        fontSize: '1rem',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',        
    }
});

export default EmployeeGrid;