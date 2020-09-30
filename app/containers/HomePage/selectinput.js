import React from 'react';
import { Select } from 'semantic-ui-react';

const countryOptions = [
  { key: 'af', value: 'af', text: 'Text Input' },
  { key: 'ax', value: 'ax', text: 'Long Text Input' },
  { key: 'al', value: 'al', text: 'Number' },
  { key: 'dz', value: 'dz', text: 'Email' },
];

const SelectInput = () => (
  <Select placeholder="Select Input Type" options={countryOptions} />
);

export default SelectInput;
