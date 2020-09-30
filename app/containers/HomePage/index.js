/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column';
import Preview from './preview';
import TabPane from './tabpane';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'INPUT' },
    'task-2': { id: 'task-2', content: 'SUBMIT' },
    'task-3': { id: 'task-3', content: 'HEADER' },
    'task-4': { id: 'task-4', content: 'CHECKBOX' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  columnOrder: ['column-1'],
};

// const initresult = {
//   draggableId: 'task-5',
//   type: 'TYPE',
//   reason: 'DROP',
//   source: {
//     droppableId: 'column-1',
//     index: 0,
//   },
//   destination: {
//     droppableId: 'column-1',
//     index: 4,
//   },
// };

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
const validateFeildsInput = {
  CHECKBOX: { internalname: true, label: true },
  SUBMIT: {
    internalname: true,
    value: true,
    color: true,
    backgroundcolor: true,
    alignment: true,
  },
  HEADER: {
    title: true,
    fontsize: true,
    color: true,
    description: true,
    alignment: true,
  },
  INPUT: {
    inputType: true,
    required: true,
    placeholder: true,
    label: true,
    internalname: true,
  },
};

const Container = styled.div`
  width: 50%;
`;

const HomePage = () => {
  const [initialDataState, setInitialStateData] = useState({ ...initialData });
  const columnId = initialDataState.columnOrder[0];
  const column = initialDataState.columns[columnId];
  const tasks = initialDataState.columns[columnId].taskIds.map(
    taskId => initialDataState.tasks[taskId],
  );

  const [activeFeilds, setActiveFeilds] = React.useState(
    validateFeildsInput.CHECKBOX,
  );
  const [activeIndex, setActiveIndex] = React.useState(0);
  const addNewElem = content => {
    // const column = 'column-1';
    const id = initialDataState.columns[column].taskIds.length + 1;
    const task = `task-${id}`;
    const value = { id: task, content };
    const newColumn = initialDataState.columns;
    newColumn[column].taskIds.push(task);
    setInitialStateData({
      ...initialDataState,
      columns: newColumn,
      tasks: { ...initialDataState.tasks, [task]: value },
    });
    setActiveFeilds(validateFeildsInput[value.content]);
    setActiveIndex(1);
  };

  const selectIndex = index => {
    // const columnId = 'column-1';
    // const column = initialDataState.columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    const { [newTaskIds[index]]: remove } = initialDataState.tasks;
    // const newColumn = { ...column, taskIds: newTaskIds };
    setActiveFeilds(validateFeildsInput[remove.content]);
    setActiveIndex(1);
  };
  const deleteElem = index => {
    // const columnId = 'column-1';
    // const column = initialDataState.columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    const { [newTaskIds[index]]: remove, ...rest } = initialDataState.tasks;
    newTaskIds.splice(index, 1);
    const newColumn = { ...column, taskIds: newTaskIds };
    setInitialStateData({
      ...initialDataState,
      columns: { [newColumn.id]: newColumn },
      tasks: { ...rest },
    });
  };

  const saveDom = () => {
    const serverData = ReactDOMServer.renderToStaticMarkup(
      <Preview tasks={tasks} />,
    );
    localStorage.setItem('data', serverData);
  };

  const onDragEnd = result => {
    // reOrder Columns
    const { draggableId, destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // const column = initialDataState.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = { ...column, taskIds: newTaskIds };
    setInitialStateData({
      ...initialDataState,
      columns: { ...initialDataState.columns, [newColumn.id]: newColumn },
    });
  };

  return (
    <React.Fragment>
      <Container>
        <DragDropContext onDragEnd={onDragEnd}>
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
            selectIndex={selectIndex}
            deleteElem={deleteElem}
          />
        </DragDropContext>
      </Container>
      <Container>
        <TabPane
          addNewElem={addNewElem}
          saveDom={saveDom}
          activeFeilds={activeFeilds}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
