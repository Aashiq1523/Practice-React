import React, {Component} from 'react';
import EmployeePanel from '../EmployeePanel/EmployeePanel';
import './RightSidePanel.css'

export default class RightSidePanel extends Component {

    render () {
        return <div className = "rightSide">
                    <EmployeePanel/>
               </div>
    }
}