import React from "react";
import PropTypes from 'prop-types';

import './Checkbox.css';



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