import React from 'react';
import PropTypes from 'prop-types';

export const SavedGameDisplay = ({ games, saveGame, loadGame }) => (
  <section>
    {games.map(({ savedGame }) =>
      <>
        <button key={savedGame.id} onClick={() => saveGame(savedGame)}>SAVE</button>
        <button key={savedGame.id} onClick={() => loadGame(savedGame)}>LOAD{savedGame}</button>
      </>
    )});
  </section>
);

SavedGameDisplay.propTypes = {
  games: PropTypes.array.isRequired,
  saveGame: PropTypes.func.isRequired,
  loadGame: PropTypes.func.isRequired
};

