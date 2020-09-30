import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
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

const Task = props => {
  const { task, index, deleteElem, selectIndex } = props;

  const inputType = {
    CHECKBOX: StyledCheckbox,
    SUBMIT: InputButton,
    HEADER: StyledHeader,
    INPUT: InputFeild,
  };

  const component = React.createElement(inputType[task.content], {});
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            tabIndex={index}
            role="button"
            onKeyPress={e => e.preventDefault()}
            onClick={e => {
              e.preventDefault();
              selectIndex(index);
            }}
          >
            {component}
            <Button
              type="button"
              onKeyPress={e => e.preventDefault()}
              onClick={e => {
                e.preventDefault();
                deleteElem(index);
              }}
            >
              <i className="trash alternate icon" />
            </Button>
          </div>
        </Container>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
  deleteElem: PropTypes.func,
  selectIndex: PropTypes.func,
};

export default Task;
