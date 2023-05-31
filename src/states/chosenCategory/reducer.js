import { ActionType } from './action';

function categoryReducer(chosenCategory = '', action = {}) {
  switch (action.type) {
    case ActionType.SET_CATEGORY:
      return chosenCategory === action.payload.chosenCategory
        ? '' : action.payload.chosenCategory;
    case ActionType.CLEAR_CATEGORY:
      return '';
    default:
      return chosenCategory;
  }
}

export default categoryReducer;
