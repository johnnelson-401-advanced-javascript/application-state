import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import getFace from '../components/face/GetFace';
import { getActions } from '../selectors/moodSelectors';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Moods = ({ actions, emoji, handleSelection }) => {
  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection} />
      <Face emoji={emoji} />
    </>
  );
};

Moods.propTypes = {
  actions: PropTypes.array.isRequired,
  emoji: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  emoji: getFace(state),
  actions: getActions(state)
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


