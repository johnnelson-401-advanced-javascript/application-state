// import PropTypes from 'prop-types';
const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', count: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', count: 'naps' },
  { name: 'STUDY', text: 'Study', count: 'studies' },
];

const controlActions = actions.map(action => ({
  ...action,
  count: action.count
}));

// controlActions.propTypes = {
//   coffees: PropTypes.number,
//   snacks: PropTypes.number,
//   naps: PropTypes.number,
//   studies: PropTypes.number,
//   handleSelection: PropTypes.func,
// };

export default controlActions;
