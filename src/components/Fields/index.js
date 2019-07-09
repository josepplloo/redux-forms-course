import React from 'react';
import ReactJson from 'react-json-view';
import cx from 'classnames';

export function customInput(props) {
  const {label, input, type, meta} = props;

  const getValidityClassName = meta => {
    const {active, touched, invalid, valid, asyncValidating } = meta;
    if (active) {
      return;
    }
    if (touched && invalid) {
      return 'invalid';
    }
    if (touched && valid) {
      return 'valid';
    }
    if (asyncValidating) {
      return 'async-validating';
    }
  };

  return (
    <div
    className={cx(
      'custom-input-container',
      { 'flex-row-reverse': type === 'checkbox' },
      { dirty: meta.dirty },
      getValidityClassName(meta)
    )}
  >
    <input {...input} type={type} />
    <label>{label}</label>
    {meta.error &&
      meta.touched &&
      !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
  </div>
  );
}

export function customSelect(props) {
  const {label, input} = props;

  return (
    <div>
      <label>{label}</label>
      <select {...input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
        <ReactJson src={props.meta} />
      </select>
    </div>
  );
};

