const initialState = {
  user: null,
  selectedUsers: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_SELECTED_USER':
      return {
        ...state,
        selectedUsers: action.selectedUsers,
      };

    default:
      return state;
  }
};