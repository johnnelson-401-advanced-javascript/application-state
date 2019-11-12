import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';
import getFace from '../components/face/GetFace';
import actions from '../actions/moodActions';

const Moods = ({ state, handleSelection }) => {
  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));
  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection} />
      <Face emoji={face} />
    </>
  );
};

Moods.propTypes = {
  state: PropTypes.object,
  handleSelection: PropTypes.func,
};

const mapStateToProps = state => ({
  state: {
    coffees: state.moodReducer.coffees,
    snacks: state.moodReducer.snacks,
    naps: state.moodReducer.naps,
    studies: state.moodReducer.studies
  } });

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({ type: name });
  }
});

const MoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodContainer;


