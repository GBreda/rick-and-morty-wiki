const setCharacter = ({ commit }, payload) => {
  commit('SET_CHARACTER', payload);
};

const toggleCharacterSheet = ({ commit }, payload) => {
  commit('TOGGLE_CHARACTER_SHEET', payload);
};

const toggleLoadingScreen = ({ commit }, payload) => {
  commit('TOGGLE_LOADING_SCREEN', payload);
};

const toggleErrorAlert = ({ commit }, payload) => {
  commit('TOGGLE_ERROR_ALERT', payload);
};

export default {
  setCharacter,
  toggleCharacterSheet,
  toggleLoadingScreen,
  toggleErrorAlert,
};
