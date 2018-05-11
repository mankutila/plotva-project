import React from 'react';
import { Icon } from '../Icon/Icon';
import PropTypes from 'prop-types';

import './InputGroup.css';

export function InputGroup(props) {
  const { name, label, type, value, onInputChange } = props;
  return (
    <label className={`input-wrapper input-wrapper_${type}`}>
      {type === 'file' ? <Icon type="file" /> : null} {label}
      <input
        className={`input-wrapper__input input-wrapper__input_${type}`}
        onChange={onInputChange}
        type={type}
        name={name}
        defaultValue={value}
      />
    </label>
  );
}

InputGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func
}
