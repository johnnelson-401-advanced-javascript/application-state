const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
  walks: 0
};

export default function saveGameReducer(state = initialState, action) {
  switch(action.type) {
    case 'SAVE_GAME':
      return { ...state };
    case 'LOAD_GAME':
      return state = { ...state };
  }
}
