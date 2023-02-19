import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../Components/Button/Button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Employees from '../data/Employee.json';
import Companies from '../data/Company.json';

const CustomTable = (props) => {

    const {isBoolean, setFormData} = props;
    const [data, setData] = useState();  
            
    useEffect(() => {
        setData(isBoolean ? Companies.companies : Employees.employees);                
    }, []);                

    return (

        <View style = {style.box}>
            <View style = {style.boxheader}>
                <View style = {style.boxCellHeader}>
                    <Text style = {style.textCellHeader}>ID</Text>
                </View>
                <View style = {style.boxCellHeader}>
                    <Text style = {style.textCellHeader}>Name</Text>
                </View>
                <View style = {style.boxCellHeader}>
                    <Text style = {style.textCellHeader}>Address</Text>
                </View>
                <View style = {style.boxDeleteCellHeader}>
                    <Text style = {style.textCellHeader}>Delete</Text>
                </View>
            </View>

            <View style = {style.boxContent}>
                <ScrollView>
                {
                    data && data.map((detail, index) => (
                        <TouchableOpacity onPress = {() => setFormData(detail)} style = {style.boxRowContent} key = {index}>
                            <View style = {style.boxId}>
                                <Text style = {style.textCellContent}>{detail.id}</Text>
                            </View>
                            <View style = {style.boxName}>
                                <Text style = {style.textCellContent}>{detail.name}</Text>
                            </View>
                            <View style = {style.boxAddress}>
                                <Text style = {style.textCellContent}>{detail.address}</Text>
                            </View>
                            <View style = {style.boxDelete}>
                                <Button name = "Delete" 
                                        buttonStyle = {style.deleteButton}
                                        textStyle = {style.deleteButtonText}
                                        isDisabled = {false}
                                        />  
                            </View>                    
                        </TouchableOpacity>                                            
                    ))                                                                                
                }                    
                </ScrollView>
            </View>                        
        </View>
    );
}

const style = StyleSheet.create({
    box: {
        height: hp('45%'),
        borderWidth: 1,        
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    boxheader: {
        flexDirection: 'row',
        height: hp('4.1%'),
        backgroundColor: '#7395ae',        
    },
    boxContent: {        
        height: hp('41%'),
    },
    boxCellHeader: {
        width: wp('19.04%'),
        paddingTop: '0.4%',
        borderWidth: 1,                
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    boxDeleteCellHeader: {
        width: wp('19.35%'),
        paddingTop: '0.4%',
        borderWidth: 1,                
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    textCellHeader: {
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold',        
        fontFamily: 'TimesNewRoman',
        color: '#ffffff',
    },
    boxRowContent: {
        flexDirection: 'row',
        backgroundColor: '#cafafe',
        height: hp('4.1%'),        
    },
    boxId: {
        width: wp('19.04%'),
        paddingTop: '0.4%',
        borderWidth: 1,                
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    boxName: {
        width: wp('19.04%'),
        paddingTop: '0.4%',
        borderWidth: 1,                
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    boxAddress: {
        width: wp('19.04%'),
        paddingTop: '0.4%',
        borderWidth: 1,                
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    boxDelete: {
        width: wp('19.04%'),
        paddingTop: '0.3%',
        borderWidth: 1,                
        borderStyle: 'solid',
        borderColor: '#000000',
    },
    textCellContent: {
        textAlign: 'center',
        fontSize: '1.2rem',
        fontFamily: 'TimesNewRoman',
        color: '#000000',
    },
    deleteButton: {
        height: hp('3%'),
        width: wp('5%'), 
        paddingTop: '0.8%',   
        margin: 'auto',        
        backgroundColor: '#501b1d',
    },
    deleteButtonText: {
        textAlign: 'center',
        color: '#ffffff',        
        fontFamily: 'TimesNewRoman',
        fontSize: '1.1rem',
    }
});

export default CustomTable;



// import React, { Component } from 'react';
// import { Button, View } from 'react-native';
// import { Table, Row, TableWrapper, Rows } from 'react-native-table-component';

// class CustomTable extends Component {

//     constructor(props) {
        
//         super(props);
//         this.state = {
//             tableHeader: ['ID', 'Name', 'Address', 'Delete'],
//             tableData: [
//                 ['1', 'Ajith', 'Kolathur', 'delete'],
//                 ['2', 'Chandru', 'Cheiyar', 'delete'],
//                 ['3', 'Daniel', 'Korattur', 'delete'],
//                 ['4', 'Alphin', 'Pattabiram', 'delete'],
//                 ['5', 'Gowri', 'Osur', 'delete'],
//                 ['6', 'Praveen', 'Avadi', 'delete'],
//                 ['7', 'Murugan', 'Gudiyatham', 'delete'],
//                 ['8', 'Vignesh', 'Madurai', 'delete'],
//                 ['9', 'Mukesh', 'Trichy', 'delete'],
//                 ['10', 'Mukil', 'Thiruchankodu', 'delete'],
//             ],
//         }        
//     }

//     render() {

//         const state = this.state;

//         const element = (data, index) => (
//             <Button/>
//         );

//         return(
//             <View>
//                 <Table>
//                     <Row data={state.tableHeader}/>
//                     {
//                         state.tableData.map((rowData, index) => (
//                             <TableWrapper key={index}>
//                             {
//                                 rowData.map((cellData, cellIndex) => (
//                                     <Rows key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData}/>
//                                 ))
//                             }
//                             </TableWrapper>
//                         ))
//                     }
//                 </Table>
//             </View>
//         );
//     }
// }

// export default CustomTable;



