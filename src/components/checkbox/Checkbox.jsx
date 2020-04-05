import React from "react";
import PropTypes from "prop-types";

import "./Checkbox.css";

class CheckboxComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    // Не викликати this.setState() тут!
    this.state = {};
    this.state.checked = this.props.checked;
    this.state.label = this.props.label;
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

    // перевірка та виклик функції, пропса onChange є функція, значить її треба не повертати а викликати
    // в цю функцію треба передати поточне значення чекбокса.
    if (typeof this.props.onChange == "function") {
      this.props.onChange();
    }

    this.setState({ checked: !this.state.checked });

    // this.setState(state => ({
    //   msg: !state.msg
    // }));

    if (this.props.onChange) {
      this.setState({ msg: "Checked" });
    } else {
      this.setState({ msg: "Un-Checked" });
    }
    console.log("in checked", this.state.checked);
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
      msg,
      ...attributes
    } = this.props;

    console.log("this state", this.state);
    console.log("in label", this.state.checked, id, msg);

    const checkClass = `${className} ${size} ${color}`;

    return (
      <div key={id} className="checkbox">
        <input
          type={type}
          name={id}
          id={id}
          className={checkClass}
          size={size}
          disabled={disabled}
          defaultChecked={checked}
          // onChange={() => this.setState({ checked: !this.state.checked })}
          onChange={this.onChange}
          {...attributes}
        />

        <label htmlFor={id}>
          {this.state.msg || label}
          {!!label.length && <span className="check-lbl">{label}</span>}
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
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  msg: PropTypes.string
};

CheckboxComponent.defaultProps = {
  disabled: false,
  className: "chek-base",
  type: "checkbox",
  checked: false,
  label: "",
  msg: ""
  // onChange: () => {}
};

export const Checkbox = CheckboxComponent;
