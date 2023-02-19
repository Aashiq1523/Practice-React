import React, {Component} from 'react';
import Proptypes from 'prop-types';
import './Button.css';

// Button Class Component
export default class Button extends Component {

    // constructor(props) {
    //   super(props);
    // }

    render () {
      return (
        <button className = {`${this.props.isPrimary ? 'primary' : this.props.className}`}
                disabled = {this.props.isDiabled}
                onClick = {this.props.onclick}>
                {this.props.name}
        </button>
      );   
    }

    static defaultProps = {
      className: 'primary',
      name: 'Button',
      onclick: function defaultFunction() {
        console.log("Hello");
      },
      isPrimary: true,
    }
    
    static propTypes = {
      className: Proptypes.string,
      name: Proptypes.string,
      onclick: Proptypes.func,
      isPrimary: Proptypes.bool,
    }
}
