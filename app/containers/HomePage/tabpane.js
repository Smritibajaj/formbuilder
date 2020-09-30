import React from 'react';
import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ValidationForm from './validationform';
import ButtonContainer from './button';

const TabPane = props => {
  const {
    addNewElem,
    saveDom,
    activeFeilds,
    activeIndex,
    setActiveIndex,
  } = props;

  const panes = [
    {
      menuItem: 'Blocks',
      render: () => (
        <Tab.Pane attached={false}>
          <ButtonContainer addNewElem={addNewElem} saveDom={saveDom} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Settings',
      render: () => (
        <Tab.Pane attached={false}>
          <ValidationForm {...activeFeilds} />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <Tab
      menu={{ secondary: true, pointing: true }}
      activeIndex={activeIndex}
      panes={panes}
      onTabChange={(event, data) => setActiveIndex(data.activeIndex)}
    />
  );
};

TabPane.propTypes = {
  addNewElem: PropTypes.func,
  saveDom: PropTypes.func,
  activeFeilds: PropTypes.object,
  activeIndex: PropTypes.object,
  setActiveIndex: PropTypes.func,
};

export default TabPane;
