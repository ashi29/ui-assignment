import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import {Filter} from './TableStyles';
import { size } from './mediaSizes';

export const GlobalFilter = ({ filter, setFilter }) => {
  const options = [
    { label: 'Name', value: "Name"},
    { label: 'Position', value: "Position"},
    { label: 'Office', value: "Office"},
  ];
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 500)
  return (
    <Filter>
      <input
      style={{
              border: "1px solid gray",
              borderRadius: "20px",
              outline: "none",
              padding: "10px",
              size:"auto"
            }}
            placeholder="Search"
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <ReactMultiSelectCheckboxes options={options}/>
    </Filter>
  )
}
