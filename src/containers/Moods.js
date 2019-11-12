import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import getFace from '../components/face/GetFace';
import { getCoffees, getSnacks, getNaps, getStudies, getWalks } from '../selectors/moodSelectors';

// eslint-disable-next-line react/prop-types
const Moods = ({ controlActions, emoji, handleSelection }) => {
  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection} />
      <Face emoji={emoji} />
    </>
  );
};

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
  { name: 'WALK', text: 'Take a Walk', stateName: 'walks' }
];

const mapStateToProps = state => ({
  emoji: getFace(state),
  controlActions: actions.map(action => 
    ({ ...action, count: state[action.stateName] }))
});


const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({ type: name });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);


