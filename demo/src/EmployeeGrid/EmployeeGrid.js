import React, { Component } from 'react';
import Button from '../Button/Button'
import './EmployeeGrid.css';

export default class EmployeeGrid extends Component {

    render() {
        
        return (
        
            <div className = "grid">
                <div className = "table">                    
                    <div className = "header">
                        <div className = "rowHeader">Id</div>
                        <div className = "rowHeader">Name</div>
                        <div className = "rowHeader">Address</div>
                        <div className = "rowHeader">Delete</div>
                    </div>
                    <div className = "content">
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                                                                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                                                                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                                                                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                                                                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                                                                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                                                                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                                                                        
                        <div className = "rowContent">
                            <div className = "id">1</div>
                            <div className = "name">Ajith</div>
                            <div className = "address">Kolathur</div>
                            <div className = "button">
                                <Button name = "Delete"
                                        className = "deleteButton"
                                        isPrimary = {false}/>
                            </div>
                        </div>                                                                        
                    </div>                    
                </div> 

                <div className = "gridButton">
                    <Button name = "Add New Employee"
                            className = "addNewEmployee"
                            isPrimary = {false}/>
                </div>
            </div>
        )
    }
}