import { mapState, mapActions } from 'vuex';
import SheetSection from './sheet-section/sheet-section.vue';
import SheetCard from './sheet-card/sheet-card.vue';

export default {
  name: 'sheet',
  components: {
    SheetSection,
    SheetCard,
  },
  computed: {
    ...mapState(['character', 'isCharacterSheetOpen']),
    aboutText() {
      if (this.character.status === 'Alive') {
        return `${
          this.character.name
        } is a ${this.character.gender.toLowerCase()}
        ${this.character.species.toLowerCase()}. ${this.pronoun(
          this.character.gender
        )} is
        ${this.character.status.toLowerCase()} and well. Last seen in
        ${this.character.episode[0].air_date}`;
      }

      if (this.character.status === 'Dead') {
        return `${
          this.character.name
        } was a ${this.character.gender.toLowerCase()}
        ${this.character.species}. ${this.pronoun(this.character.gender)} is
        ${this.character.status.toLowerCase()}. Last seen in
        ${this.character.episode[0].air_date}`;
      }

      return `${this.character.name} is a ${this.character.gender.toLowerCase()}
      ${this.character.species.toLowerCase()}. It can't be told if
      ${this.pronoun(this.character.gender)} is alive or dead. Last seen in
      ${this.character.episode[0].air_date}`;
    },
  },
  methods: {
    ...mapActions(['toggleCharacterSheet']),
    closeSheet() {
      this.toggleCharacterSheet(false);
    },
    pronoun(gender) {
      return gender === 'Female' ? 'She' : 'He';
    },
  },
};
