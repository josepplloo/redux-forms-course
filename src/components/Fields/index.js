import React from 'react';
import ReactJson from 'react-json-view';


export function customInput(props) {
  const {label, input, type, meta} = props;

  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      {meta.error &&
        meta.touched && (
          <div style={{ color: 'red' }}>{meta.error}</div>
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
