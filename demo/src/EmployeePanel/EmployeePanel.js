import React, {Component} from 'react';
import EmployeeGrid from '../EmployeeGrid/EmployeeGrid';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import './EmployeePanel.css';

export default class EmployeePanel extends Component {

    render() {
        return (
            <div className = "employee">
                <EmployeeGrid/>
                <EmployeeForm/>
            </div>
        )
    }
} 