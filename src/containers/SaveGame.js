import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SaveGame = ({ id, handleSave }) => {
  return (
    <section>
      <button key={id} onClick={() => handleSave(id)}></button>

    </section>
  );
};

SaveGame.propTypes = {
  id: PropTypes.string,
  handleSave: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  id: state.id

});

const mapDispatchToProps = dispatch => ({
  handleSave(state) {
    dispatch({ type: SaveGame, payload: state });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveGame);
