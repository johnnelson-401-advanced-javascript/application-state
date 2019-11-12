import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';
import getFace from '../components/face/GetFace';
import controlActions from '../components/actions/Actions';


const Moods = ({ coffees, snacks, naps, studies, handleSelection }) => {
  const face = getFace({ coffees, snacks, naps, studies });
  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection} />
      <Face emoji={face} />
    </>
  );
};


Moods.propTypes = {
  coffees: PropTypes.number,
  snacks: PropTypes.number,
  naps: PropTypes.number,
  studies: PropTypes.number,
  handleSelection: PropTypes.func,
};

const mapStateToProps = state => ({
  coffees: state.coffees,
  snacks: state.snacks,
  naps: state.naps,
  studies: state.studies
});

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


