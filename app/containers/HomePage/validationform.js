import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SelectInput from './selectinput';

// const validateFeilds = {
//   inputType: '',
//   internalname: '',
//   label: '',
//   value: '',
//   placeholder: '',
//   title: '',
//   fontsize: '',
//   color: '',
//   backgroundcolor: '',
//   description: '',
//   alignment: '',
//   required: false,
// };

const ValidationForm = props => {
  const {
    inputType,
    internalname,
    label,
    value,
    placeholder,
    title,
    fontsize,
    color,
    backgroundcolor,
    description,
    alignment,
    required,
  } = props;

  return (
    <Form>
      {inputType && (
        <Form.Field>
          <label htmlFor="domId1">Input Type</label>
          <SelectInput id="domId1" />
        </Form.Field>
      )}
      {internalname && (
        <Form.Field>
          <label htmlFor="domId2">Name(Internal)</label>
          <input id="domId2" placeholder="Name" />
        </Form.Field>
      )}
      {label && (
        <Form.Field>
          <label htmlFor="domId3">Label</label>
          <input id="domId3" placeholder="Label" />
        </Form.Field>
      )}
      {value && (
        <Form.Field>
          <label htmlFor="domId4">Value</label>
          <input id="domId4" placeholder="Value" />
        </Form.Field>
      )}
      {placeholder && (
        <Form.Field>
          <label htmlFor="domId5">PlaceHolder</label>
          <input id="domId5" placeholder="Placeholder" />
        </Form.Field>
      )}
      {title && (
        <Form.Field>
          <label htmlFor="domId6">Title</label>
          <input id="domId6" placeholder="Title" />
        </Form.Field>
      )}
      {fontsize && (
        <Form.Field>
          <label htmlFor="domId7">Font Size</label>
          <input id="domId7" type="number" placeholder="Font Size" />
        </Form.Field>
      )}
      {color && (
        <Form.Field>
          <label htmlFor="domId8">Font Color</label>
          <input id="domId8" type="color" placeholder="Font Color" />
        </Form.Field>
      )}
      {description && (
        <Form.Field>
          <label htmlFor="domId9">Description</label>
          <input id="domId9" placeholder="Description" />
        </Form.Field>
      )}
      {backgroundcolor && (
        <Form.Field>
          <label htmlFor="domId10">Background Color</label>
          <input id="domId10" type="color" placeholder="Background Color" />
        </Form.Field>
      )}
      {alignment && (
        <Form.Field>
          <label htmlFor="domId11">Align</label>
          <input id="domId11" placeholder="Alignment" />
        </Form.Field>
      )}
      {required && (
        <Form.Field>
          <Checkbox id="domId12" label="Requied" />
        </Form.Field>
      )}
      <Button id="domId13" type="submit">
        Submit
      </Button>
    </Form>
  );
};

ValidationForm.propTypes = {
  inputType: PropTypes.bool,
  internalname: PropTypes.bool,
  label: PropTypes.bool,
  value: PropTypes.bool,
  placeholder: PropTypes.bool,
  title: PropTypes.bool,
  fontsize: PropTypes.bool,
  color: PropTypes.bool,
  backgroundcolor: PropTypes.bool,
  description: PropTypes.bool,
  alignment: PropTypes.bool,
  required: PropTypes.bool,
};

export default ValidationForm;
