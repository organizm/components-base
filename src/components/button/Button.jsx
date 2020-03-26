import React from "react";
import PropTypes from 'prop-types';
import './Button.css';
import './Button-lg.css';


class ButtonComponent extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            color: 'secondary',
            disabled: false,
            className: 'Button',
            size: 'sm',
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

        if (close && typeof attributes.children === 'undefined') {
            attributes.children = <span aria-hidden>×</span>;
          }
          
          const classes = [
            { close },
            close || 'btn',
            size ? `${color}-${size}` : false,
            block ? 'btn-block' : false,
            { active, disabled: this.props.disabled }];
      
          if (attributes.href && Tag === 'button') {
            Tag = 'a';
          }
      
          if (this.props.сlassName && size === size) {
            size = size;
          }

        //   const defaultAriaLabel = close ? 'Close' : null;

        return <div сlassName="btn">
            <button 
                className={this.props.className} 
                type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}  
                disabled={this.props.disabled}
                onClick={this.onClick}>
                Knopka 
            </button>
            {/* <Tag
                type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
                {...attributes}
                ref={innerRef}
                onClick={this.onClick}
                aria-label={ariaLabel || defaultAriaLabel}>
                
            </Tag> */}

            {console.log('start props', this.props)}
            {console.log('start state', this.state)}
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

ButtonComponent.defaultProps = {
    color: 'secondary',
    disabled: false,
    className: 'main',
    tag: 'button',
    size: 'sm',
    };

export const Button = ButtonComponent;