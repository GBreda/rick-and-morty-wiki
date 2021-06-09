import { mapState, mapActions } from 'vuex';

export default {
  name: 'sheet',
  computed: {
    ...mapState(['character', 'isCharacterSheetOpen']),
  },
  methods: {
    ...mapActions(['toggleCharacterSheet']),
    closeSheet() {
      this.toggleCharacterSheet(false);
    },
  },
};
