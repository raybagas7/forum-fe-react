const ActionType = {
  SET_CATEGORY: 'SET_CATEGORY',
};

const setCategoryActionCreator = (chosenCategory) => ({
  type: ActionType.SET_CATEGORY,
  payload: {
    chosenCategory,
  },
});

function setCategory(category) {
  return async (dispatch) => {
    dispatch(setCategoryActionCreator(category));
  };
}

export {
  ActionType,
  setCategoryActionCreator,
  setCategory
};
