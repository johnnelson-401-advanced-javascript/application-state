import React from 'react';
import PropTypes from 'prop-types';

export const SavedGameDisplay = ({ games, saveGame, loadGame }) => (
  <section>
    {games.map(({ savedGame, id }) =>
      <>
        <button key={id} onClick={() => saveGame(savedGame)}></button>
        <button key={id} onClick={() => loadGame(savedGame)}></button>
      </>
    )});
  </section>
);

SavedGameDisplay.propTypes = {
  games: PropTypes.array.isRequired,
  saveGame: PropTypes.func.isRequired,
  loadGame: PropTypes.func.isRequired
};

