const initialState = {
  viewTitle: ''
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW_TITLE':
      return {
        ...state,
        viewTitle: action.viewTitle
      };

    default:
      return state;
  }
};
