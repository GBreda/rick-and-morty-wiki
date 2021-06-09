const SET_CHARACTER = (state, payload) => {
  state.character = payload;
};

const TOGGLE_CHARACTER_SHEET = (state, payload) => {
  state.isCharacterSheetOpen = payload;
};

export default {
  SET_CHARACTER,
  TOGGLE_CHARACTER_SHEET,
};
