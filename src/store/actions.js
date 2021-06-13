const setCharacter = ({ commit }, payload) => {
  commit('SET_CHARACTER', payload);
};

const toggleCharacterSheet = ({ commit }, payload) => {
  commit('TOGGLE_CHARACTER_SHEET', payload);
};

const toggleLoadingScreen = ({ commit }, payload) => {
  commit('TOGGLE_LOADING_SCREEN', payload);
};

export default {
  setCharacter,
  toggleCharacterSheet,
  toggleLoadingScreen,
};
