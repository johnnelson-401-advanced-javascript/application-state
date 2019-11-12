// import React from 'react';
// import PropTypes from 'prop-types';

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

const controlActions = actions.map(action => ({
  ...action,
  count: [action.stateName]
}));

actions.propTypes = {

};


export default controlActions;
