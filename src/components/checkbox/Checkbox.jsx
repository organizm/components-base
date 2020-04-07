import React from "react";
import PropTypes from "prop-types";

import "./Checkbox.css";

class CheckboxComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    // Не викликати this.setState() тут!
    this.state = {};
    // this.state.checked = false;
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onChange) {
      let msg;
      // if (this.state.checked) {
      //   msg = "checked";
      // } else {
      //   msg = "unchecked";
      // }
      this.props.onChange(e);
      // return (
      //   <div>
      //     <p>this box is {msg}.</p>
      //   </div>
      // );
    }

    // перевірка та виклик функції, пропса onChange є функція, значить її треба не повертати а викликати
    // в цю функцію треба передати поточне значення чекбокса.
    if (typeof this.props.onChange == "function") {
      this.props.onChange();
    }
    // this.setState({ checked: !this.state.checked });

    // console.log("in checked", this.state.checked);
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

    console.log("in checked", this.state);
    console.log("in label", this.state.label, id);

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
          // onChange={this.props.onChangeFunc}

          defaultChecked={checked}
          // onChange={() => this.setState({ checked: !this.state.checked })}
          onChange={() => {
            this.props.onChangeFunc(this.state);
          }}
          {...attributes}
        />
        <label htmlFor={id}>
          {msg}
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
  label: PropTypes.string
};

CheckboxComponent.defaultProps = {
  disabled: false,
  className: "chek-base",
  type: "checkbox",
  checked: false,
  label: ""
  // onChange: () => {}
};

export const Checkbox = CheckboxComponent;
