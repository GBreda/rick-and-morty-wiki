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
  },
  methods: {
    ...mapActions(['toggleCharacterSheet']),
    closeSheet() {
      this.toggleCharacterSheet(false);
    },
  },
};
