import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Task from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

export default function Column(props) {
  const { column, tasks, deleteElem, selectIndex } = props;
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {provided => (
          <TaskList {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                deleteElem={deleteElem}
                selectIndex={selectIndex}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
Column.propTypes = {
  column: PropTypes.object,
  tasks: PropTypes.array,
  deleteElem: PropTypes.func,
  selectIndex: PropTypes.func,
};
