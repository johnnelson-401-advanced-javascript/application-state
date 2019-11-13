import { getCoffees, getSnacks, getNaps, getStudies, getWalks } from '../../selectors/moodSelectors';

export const isTired = state => getCoffees(state) < 1 && getNaps(state) < 1;
export const isHyper = state => getCoffees(state) > 3;
export const isEducated = state => getStudies(state) > 2;
export const isHungry = state => getSnacks(state) < 1;
export const isExercised = state => getWalks(state) > 3;

const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';
  if(isExercised(state)) return '😎';
  return '😀';
};

export default getFace;
