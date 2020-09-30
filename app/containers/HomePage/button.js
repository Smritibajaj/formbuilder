import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = props => {
  const { addNewElem, saveDom } = props;

  return (
    <Container>
      <Button id={1} onClick={() => addNewElem('INPUT')}>
        Add Input
      </Button>
      <Button id={2} onClick={() => addNewElem('HEADER')}>
        Add Header
      </Button>
      <Button id={3} onClick={() => addNewElem('SUBMIT')}>
        Add Button
      </Button>
      <Button id={4} onClick={() => addNewElem('CHECKBOX')}>
        Add Checkbox
      </Button>
      <Button id={5} onClick={saveDom}>
        Save DOM
      </Button>
    </Container>
  );
};

ButtonContainer.propTypes = {
  addNewElem: PropTypes.func,
  saveDom: PropTypes.func,
};

export default ButtonContainer;
