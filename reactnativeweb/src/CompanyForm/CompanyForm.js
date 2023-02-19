import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '../Components/Button/Button';

const CompanyForm = (props) => {

    const {formData} = props;

    const [input, setInput] = useState(formData);
    
    const handleChange = (text) => {        
        setInput(text);
    }

    console.log(formData.id);
    console.log(input.item.id);

    return(
        <View style = {style.box}>

            <View style = {style.boxTitle}>
                <Text style = {style.textTitle}>Company Details</Text>
            </View>

            <View style = {style.boxForm}>
                <View style = {style.boxFormRow}>
                    <View style = {style.boxFormField}>
                        <Text style = {style.formField}>ID:</Text>
                    </View>
                    <View style = {style.boxFormData}>
                        <TextInput style = {style.formTextInput} value = {formData.id} placeholder = {"Enter ID"}/>
                    </View>
                </View>
                <View style = {style.boxFormRow}>
                    <View style = {style.boxFormField}>
                        <Text style = {style.formField}>Name:</Text>
                    </View>
                    <View style = {style.boxFormData}>
                        <TextInput style = {style.formTextInput} value = {formData.name} placeholder = {"Enter Name"}/>
                    </View>
                </View>
                <View style = {style.boxFormRow}>
                    <View style = {style.boxFormField}>
                        <Text style = {style.formField}>Address:</Text>
                    </View>
                    <View style = {style.boxFormData}>
                        <TextInput style = {style.formTextInput} value = {formData.address} placeholder = {"Enter Address"}/>
                    </View>
                </View>

            </View>
            
            <View style = {style.boxButton}>

                <View style = {style.boxClear}>
                    <Button name = "Clear"
                            buttonStyle = {style.clearButton}
                            textStyle = {style.text}
                            isDisabled = {false}
                            />
                </View>

                <View style = {style.boxMessage}>
                
                </View>                

                <View style = {style.boxAddOrUpdate}>
                    <Button name = "Update"
                            buttonStyle = {style.addOrUpdateButton}
                            textStyle = {style.text}
                            isDisabled = {false}
                            />
                </View>                

            </View>

        </View>
    );
}

const style = StyleSheet.create({
    box: {        
        height: hp('40%'),
        width: wp('79.8%'),
        padding: '2%',        
    },
    boxTitle: {
        height: hp('6%'),
        paddingTop: '1%',
    },
    boxForm: {
        height: hp('18%'),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    boxButton: {
        flexDirection: 'row',
        height: hp('6%'),
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    textTitle: {
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
        fontSize: '1.25rem',
    },
    boxFormRow: {
        flexDirection: 'row',
        height: hp('6%'),        
    },
    boxFormField: {
        width: wp('19.2%'),
        paddingLeft: '1%',
        paddingTop: '1%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    boxFormData: {
        width: wp('57.25%'),
        paddingLeft: '1%',
        paddingTop: '0.6%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    boxAddOrUpdate: {
        paddingLeft: '23%',
        paddingTop: '0.6%',
        width: wp('25%'),                
    },
    boxClear: {
        paddingLeft: '3%',
        paddingTop: '0.6%',
        width: wp('25%'),
    },
    boxMessage: {
        width: wp('26.45%'),
    },
    clearButton: {
        width: wp('5%'),
        height: hp('4%'),        
        backgroundColor: '#20bf6b',
    },
    addOrUpdateButton: {
        width: wp('5%'),
        height: hp('4%'),
        backgroundColor: '#20bf6b',
    },
    text: {
        textAlign: 'center',
        padding: '5%',
        fontSize: '1.1rem',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
    },
    formField: {
        fontSize: '1.2rem',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
    },
    idField: {
        color: '#888',
        fontSize: '1.1rem',
        fontWeight: 'bold',
    },
    formTextInput: {
        width: wp('10%'),
        height: hp('4%'),
        borderColor: '#d3d3d3',
        fontSize: '1.2rem',
        fontFamily: 'TimesNewRoman',
    }
});

export default CompanyForm;