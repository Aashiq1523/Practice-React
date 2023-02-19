import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../Button/Button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LeftSidePanel = (props) => {

    const {isButtonClicked, onButtonClick} = props;

    return (
        <View style = {styles.box}>
            <View>
                <Button name = "Company"
                        onClick = {onButtonClick}                      
                        buttonStyle = {isButtonClicked ? styles.companyButtonSelected : styles.companyButton}
                        isDisabled = {isButtonClicked}
                        textStyle = {styles.text}
                        />
            </View>
            <View>
                <Button name = "Employee"                                                
                        onClick = {onButtonClick}
                        buttonStyle = {!isButtonClicked ? styles.employeeButtonSelected : styles.employeeButton}
                        isDisabled = {!isButtonClicked}
                        textStyle = {styles.text}
                        />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {        
        width: wp('20%'),
        height: hp('100%'),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
    },    
    companyButton: {
        width: wp('9%'),
        height: hp('8%'),
        marginLeft: '25%',
        marginTop: '25%',           
        padding: 15,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#20bf6b',        
    },    
    companyButtonSelected: {
        width: wp('9%'),
        height: hp('8%'),
        marginLeft: '25%',
        marginTop: '25%',           
        padding: 15,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#499949',
        borderRadius: 20,        
    },
    employeeButton: {
        width: wp('9%'),
        height: hp('8%'),
        marginLeft: '25%',
        marginTop: '10%',           
        padding: 15,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#20bf6b',
    },
    employeeButtonSelected: {
        width: wp('9%'),
        height: hp('8%'),
        marginLeft: '25%',
        marginTop: '10%',           
        padding: 15,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#499949',
        borderRadius: 20,        
    },
    text: {
        color: '#499949',
        textAlign: 'center',
        fontSize: '1.2em',    
    }
});

export default LeftSidePanel;