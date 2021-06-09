const setCharacter = ({ commit }, payload) => {
  commit('SET_CHARACTER', payload);
};

const toggleCharacterSheet = ({ commit }, payload) => {
  commit('TOGGLE_CHARACTER_SHEET', payload);
};

export default {
  setCharacter,
  toggleCharacterSheet,
};
