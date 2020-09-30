import React from 'react';
import { Form } from 'semantic-ui-react';

const InputFeild = () => (
  <Form.Field>
    <label htmlFor="input">First Name</label>
    <input id="input" placeholder="First Name" />
  </Form.Field>
);

export default InputFeild;
