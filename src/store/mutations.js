const SET_CHARACTER = (state, payload) => {
  state.character = payload;
};

const TOGGLE_CHARACTER_SHEET = (state, payload) => {
  state.isCharacterSheetOpen = payload;
};

const TOGGLE_LOADING_SCREEN = (state, payload) => {
  state.loadingScreen = payload;
};

const TOGGLE_ERROR_ALERT = (state, payload) => {
  state.errorAlert = payload;
};

export default {
  SET_CHARACTER,
  TOGGLE_CHARACTER_SHEET,
  TOGGLE_LOADING_SCREEN,
  TOGGLE_ERROR_ALERT,
};
