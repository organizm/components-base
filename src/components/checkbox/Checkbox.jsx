<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> c09b38e1f591025e6067a46cb83e323b86321584
import PropTypes from 'prop-types';

import './Checkbox.css';

<<<<<<< HEAD
class CheckboxComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      id,
      type,
      label,
      error,
      children,
      active,
      className,
      disabled,
      color,
      size,
      onClick,
      checked,
      ...attributes
    } = this.props;

    let checkClass = `${className} ${size} ${color}`;

    return (
      <div className="checkbox">
        <input
          type={type}
          name={id}
          id={id}
          className={checkClass}
          size={size}
          disabled={disabled}
          {...attributes}
        />
        <label htmlFor={id}>{this.props.label}</label>
      </div>
    );
  }
}

CheckboxComponent.propTypes = {
  'aria-label': PropTypes.string,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string, // main / secondary / tertiary
  className: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

CheckboxComponent.defaultProps = {
  disabled: false,
  className: 'chek-base',
  type: 'checkbox',
  checked: false,
  label: '',
};

export const Checkbox = CheckboxComponent;
=======


class CheckboxComponent extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {

        };
       
      }

    render() {
        let {
            id,
            type,
            label, 
            error,
            children,
            active,
            className,   
            disabled,    
            color,  
            size,
            onClick,
            ...attributes
          } = this.props;

        let checkClass = `${className} ${size} ${color}`; 

        // const Tag = attributes.checkbox ? 'a' : 'Checkbox';

        // console.log("mij class", checkClass);

        return (
          <div className ="checkbox">
                <input
                  type={type}
                  name={id}
                  id={id}
                  className={checkClass}
                  size={size}
                  {...attributes}
                />
                <label for={id}>чекбокс {id}</label>
          </div>     
        );
    }

}

CheckboxComponent.propTypes = {
    'aria-label': PropTypes.string,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string, // main / secondary / tertiary
    className: PropTypes.string,
};

CheckboxComponent.defaultProps = {
    disabled: false,
    className: 'chek-base',
    type:'checkbox'
    };

export const Checkbox = CheckboxComponent;
>>>>>>> c09b38e1f591025e6067a46cb83e323b86321584
