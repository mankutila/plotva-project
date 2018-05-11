import { appReducer } from '../appReducer';

describe('Redux: App Reducer', () => {
  it('should return initial state with given an empty action', () => {
    const initialState = {
      viewTitle: '',
      isMenuOpened: false
    }
    expect(appReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SET_VIEW_TITLE action', () => {
    const viewTitle = 'Chat name';
    const appAction = {
      type: 'SET_VIEW_TITLE',
      viewTitle
    };
    expect(appReducer({}, appAction)).toEqual({ viewTitle: 'Chat name' });
  });
  it('should handle OPEN_MENU action', () => {
    const appAction = {
      type: 'OPEN_MENU'
    };
    expect(appReducer({}, appAction)).toEqual({ isMenuOpened: true });
  });
  it('should handle CLOSE_MENU action', () => {
    const appAction = {
      type: 'CLOSE_MENU'
    };
    expect(appReducer({}, appAction)).toEqual({ isMenuOpened: false });
  });
});
