import React, {Component} from 'react';
import './LeftSidePanel.css';
import Button from '../Button/Button';

export default class LeftSidePanel extends Component
{
    constructor(props) {
        super(props);
        this.state = {isCompanyClicked: true, isEmployeeClicked: false};
    }
    
    buttonClick = () => {
        this.setState(state => ({
            isCompanyClicked: !state.isCompanyClicked,
            isEmployeeClicked: !state.isEmployeeClicked
        }));                    
    }
    
    render() {
        
        return (
            <div className = "leftSide">                
                <div className = "companyDiv">
                    <Button className = {this.state.isCompanyClicked ? 'companyButtonSelected' : 'companyButton'}
                            name = "Company" 
                            onclick = {this.buttonClick}
                            isDiabled = {this.state.isCompanyClicked}
                            isPrimary = {false}/>
                </div>
                <div className = "employeeDiv">
                    <Button className = {this.state.isEmployeeClicked ? 'employeeButtonSelected' : 'employeeButton'}
                            name = "Employee" 
                            onclick = {this.buttonClick}
                            isDiabled = {this.state.isEmployeeClicked}
                            isPrimary = {false}/>
                </div>                                    
            </div>
        );
    }
}
