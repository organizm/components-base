import React from "react";
import PropTypes from 'prop-types';
import './Button.css';

class ButtonComponent extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            color: 'secondary',
            disabled: false,
            className: 'secondary',
            size: 'secondary',
            };
    
        // це обовзково для работи `this` .
        this.onClick = this.onClick.bind(this);
      }

    onClick(e) {
        if (this.props.disabled) {
            e.preventDefault();
            return;
          }
      
          if (this.props.onClick) {
            this.props.onClick(e);
          }
    }

    render() {
        let {
            active,
            block,
            className,
            close,
            cssModule,
            color,
            outline,
            size,
            tag: Tag,
            innerRef,
            ...attributes
          } = this.props;

          let btnClass = `${className} ${size} ${color}`; 
          console.log("mij class", btnClass);
        return <button 
                  className={btnClass}
                  type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}  
                  disabled={this.props.disabled}
                  onClick={this.onClick}>
                  Knopka 
                </button>
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

ButtonComponent.defaultProps = {
    color: 'secondary',
    disabled: false,
    className: 'main',
    tag: 'button',
    size: 'sm',
    };

export const Button = ButtonComponent;