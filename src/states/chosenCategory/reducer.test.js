import categoryReducer from './reducer';

describe('categoryReducer functions', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = '';
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = categoryReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the chosen category when given by SET_CATEGORY action', () => {
    // Arrange
    const initialState = '';
    const chosenCategory = 'react';
    const action = { type: 'SET_CATEGORY', payload: { chosenCategory } };

    // Action
    const nextState = categoryReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(chosenCategory);
  });

  it('should return set the chosen category to empty if the chosen category same as prev state when given by SET_CATEGORY action', () => {
    // Arrange
    const initialState = 'react';
    const chosenCategory = 'react';
    const action = { type: 'SET_CATEGORY', payload: { chosenCategory } };

    // Action
    const nextState = categoryReducer(initialState, action);

    // Assert
    expect(nextState).toEqual('');
  });
  it('should return clear empty string when given by CLEAR_CATEGORY action', () => {
    // Arrange
    const initialState = 'react';
    const action = { type: 'CLEAR_CATEGORY' };

    // Action
    const nextState = categoryReducer(initialState, action);

    // Assert
    expect(nextState).toEqual('');
  });
});
