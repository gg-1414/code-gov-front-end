import { SAVE_FILTER_OPTIONS } from 'constants/actions';

export default function (state = null, action) {
  switch(action.type) {
    case SAVE_FILTER_OPTIONS:
      return action.options;
    default:
      return state;
  }
}