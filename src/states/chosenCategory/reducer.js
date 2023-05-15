import { ActionType } from './action';

function categoryReducer(chosenCategory = '', action = {}) {
  switch (action.type) {
    case ActionType.SET_CATEGORY:
      return chosenCategory === action.payload.chosenCategory
        ? '' : action.payload.chosenCategory;
    default:
      return chosenCategory;
  }
}

export default categoryReducer;
