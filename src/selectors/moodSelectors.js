export const getCoffees = state => state.moodReducer.coffees;
export const getSnacks = state => state.moodReducer.snacks;
export const getNaps = state => state.moodReducer.naps;
export const getStudies = state => state.moodReducer.studies;
export const getWalks = state => state.moodReducer.walks;

export const getActions = state => [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: getCoffees(state) },
  { name: 'EAT_SNACK', text: 'Snack', count: getSnacks(state) },
  { name: 'TAKE_NAP', text: 'Nap', count: getNaps(state) },
  { name: 'STUDY', text: 'Study', count: getStudies(state) },
  { name: 'WALK', text: 'Take a Walk', count: getWalks(state) },
  { name: 'RESET' }
];
