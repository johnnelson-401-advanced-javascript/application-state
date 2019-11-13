import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SaveGameDisplay from '../components/SavedGames/SaveGameDisplay';
import { handleLoad, handleSave } from '../selectors/savedGames';

const SaveGameContainer = ({ games, handleSave, handleLoad }) => {
  return (
    <SaveGameDisplay 
      games={games} 
      handleSave={handleSave} 
      handleLoad={handleLoad}
    />
  );
};

SaveGameContainer.propTypes = {
  games: PropTypes.object,
  handleSave: PropTypes.func.isRequired,
  handleLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  games: state
});

const mapDispatchToProps = dispatch => ({
  handleSave(state) {
    dispatch({ type: 'SAVE_GAME', state: handleSave(state) });
  },
  handleLoad(state) {
    dispatch({ type: 'LOAD_GAME', state: handleLoad(state) });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveGameContainer);
