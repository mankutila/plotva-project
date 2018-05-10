const initialState = {
  viewTitle: '',
  isMenuOpened: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW_TITLE':
      return {
        ...state,
        viewTitle: action.viewTitle
      };
    case 'OPEN_MENU':
      return {
        ...state,
        isMenuOpened: true
      };
    case 'CLOSE_MENU':
      return {
        ...state,
        isMenuOpened: false
      };

    default:
      return state;
  }
};
