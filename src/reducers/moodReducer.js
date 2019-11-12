const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
  walks: 0
};

export default function moodReducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { ...state, coffees: state.coffees + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    case 'WALK':
      return { ...state, walks: state.walks + 1, coffees: state.coffees - 1 };
    default:
      // eslint-disable-next-line no-console
      console.log(`unhandled name: ${action.type}`);
      return state;
  }
}
