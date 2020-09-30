import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputFeild from './inputfeild';
import InputButton from './inputbutton';
import StyledHeader from './header';
import StyledCheckbox from './checkbox';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

const PreviewTask = props => {
  const { task, index } = props;

  const inputType = {
    CHECKBOX: StyledCheckbox,
    SUBMIT: InputButton,
    HEADER: StyledHeader,
    INPUT: InputFeild,
  };

  const component = React.createElement(inputType[task.content], {});
  return <Container id={index}>{component}</Container>;
};

PreviewTask.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
};

export default PreviewTask;
