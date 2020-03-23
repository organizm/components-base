import React from "react";
import PropTypes from 'prop-types';

class ButtonComponent extends React.PureComponent{
    render() {
        return <button>Sample</button>;
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

export const Button = ButtonComponent;