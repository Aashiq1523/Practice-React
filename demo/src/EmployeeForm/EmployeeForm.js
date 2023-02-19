import React, { Component } from 'react';
import Button from '../Button/Button';
import './EmployeeForm.css';

export default class EmployeeForm extends Component {

    render() {
        
        return (
        
            <div className = "form">
                <div className = "title">
                    Employee Details
                </div>
                <div className = "formContent">
                    <div className = "first">
                        <div className = "idDiv">
                            <div className = "label">Id</div>
                        </div>
                        <div className = "idValue">
                            <div className = "label">
                                 <label>1</label>
                            </div>
                        </div>
                    </div>
                    <div className = "second">
                        <div className = "nameDiv">
                            <div className = "label">Name</div>
                        </div>
                        <div className = "nameValue">
                            <input type = "textbox" className = "textbox" value = "Ajith"/>
                        </div>
                    </div>
                    <div className = "third">
                        <div className = "addressDiv">
                            <div className = "label">Address</div>
                        </div>
                        <div className = "addressValue">
                            <input type = "textbox" className = "textbox" value = "Kolathur"/>
                        </div>                        
                    </div>
                </div>
                <div className = "formButton">
                    <Button name = "Clear"
                            className = "clearButton"
                            isPrimary = {false}/>
                    <Button name = "Add"
                            className = "addButton"
                            isPrimary = {false}/>
                </div>
            </div>
        )
    }
}