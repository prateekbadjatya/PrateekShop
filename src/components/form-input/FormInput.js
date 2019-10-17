import React from 'react';
import './FormInput.scss';
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <div>
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    </div>
  );
};
export default FormInput;
