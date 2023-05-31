const ActionType = {
  SET_CATEGORY: 'SET_CATEGORY',
  CLEAR_CATEGORY: 'CLEAR_CATEGORY',
};

const setCategoryActionCreator = (chosenCategory) => ({
  type: ActionType.SET_CATEGORY,
  payload: {
    chosenCategory,
  },
});

const clearCategoryActionCreator = () => ({
  type: ActionType.SET_CATEGORY,
});

function setCategory(category) {
  return async (dispatch) => {
    dispatch(setCategoryActionCreator(category));
  };
}

function clearCategory() {
  return async (dispatch) => {
    dispatch(clearCategoryActionCreator());
  };
}

export {
  ActionType, setCategoryActionCreator, setCategory, clearCategory
};
