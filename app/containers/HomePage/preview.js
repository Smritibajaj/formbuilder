import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PreviewTask from './previewtask';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

export default function Preview(props) {
  const { tasks } = props;
  return (
    <Container>
      <TaskList>
        {tasks.map((task, index) => (
          <PreviewTask key={task.id} task={task} index={index} />
        ))}
      </TaskList>
    </Container>
  );
}

Preview.propTypes = {
  tasks: PropTypes.object,
};
