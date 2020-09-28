import React from 'react';

const StatusSelect = ({ statusChange }) => {
  return (
    <div className="pa2">
      <select 
        onChange={statusChange}
        id="status" 
        name="status"
        className="tc pa2 ba b--near-black bg-light-yellow"
      >
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="deceased">Deceased</option>
        <option value="presumed dead">Presumed dead</option>
        <option value="unknown">Unknown</option>
        <option value="?">Not defined</option>
      </select>
    </div>
  );
};

export default StatusSelect;

