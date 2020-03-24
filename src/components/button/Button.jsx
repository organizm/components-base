import React from "react";
import PropTypes from 'prop-types';
import './Button.css';


class ButtonComponent extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            color: 'secondary',
            disabled: true,
            className: 'Button',
            isToggleOn: false,
            disable:false};
    
        // це обовзково для работи `this` .
        this.onClick = this.onClick.bind(this);
      }

    onClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        // return <button>Sample</button>
        
        return <div >
        <button variant="outline-primary" disabled={this.state.disable} className={this.props.color} type="button" onClick={this.onClick}>
            {this.state.isToggleOn ? 'Включено' : 'Виключено'}
            </button>
            <button variant="outline-primary"> test variant</button>
            {console.log('start', this.state)}
            </div>
    }
}

ButtonComponent.propTypes = {
    'aria-label': PropTypes.string,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string, // main / secondary / tertiary
    className: PropTypes.string,
};

ButtonComponent.defaultProps = {color: 'secondary',
disabled: true,
className: 'main',
isToggleOn: true};

export const Button = ButtonComponent;