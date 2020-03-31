import React from "react";
import PropTypes from "prop-types";

import "./Checkbox.css";

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
      // this.state.checked = !this.state.checked;
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
      defaultChecked,
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
          // checked={checked}
          onChange={this.onChange}
          {...attributes}
        />
        <label htmlFor={id}>
<<<<<<< HEAD
          {this.props.label.length > "" && (
            <span className="check-lbl">{this.props.label}</span>
          )}
=======
          <span className="check-lbl">{this.props.label}</span>
>>>>>>> f5a8a1f23eab52bedc9c327910df64066817066b
        </label>
      </div>
    );
  }
}

CheckboxComponent.propTypes = {
  "aria-label": PropTypes.string,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string, // main / secondary / tertiary
  className: PropTypes.string,
  checked: PropTypes.bool,
<<<<<<< HEAD
  defaultChecked: PropTypes.bool,
=======
>>>>>>> f5a8a1f23eab52bedc9c327910df64066817066b
  label: PropTypes.string
};

CheckboxComponent.defaultProps = {
  disabled: false,
  className: "chek-base",
  type: "checkbox",
  checked: false,
<<<<<<< HEAD
  defaultChecked: false,
=======
>>>>>>> f5a8a1f23eab52bedc9c327910df64066817066b
  label: ""
};

export const Checkbox = CheckboxComponent;
