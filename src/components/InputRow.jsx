import React from 'react';

function InputRow(props) {
  return(
    <div>
      <input
        className="numberInput"
        type="number"
        value={props.value}
        onChange={props.change}
      ></input>
      <select
        className="countryInput"
        onChange={props.change}
        value={props.currency}
      >
        {props.countries.map(country => (
          <option value={country}>{country}</option>
        ))}
      </select>
    </div>
  )
}

export default InputRow;
