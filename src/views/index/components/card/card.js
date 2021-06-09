import gql from 'graphql-tag';
import { mapActions } from 'vuex';

export default {
  name: 'card',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  filters: {
    textShortener(text) {
      const splitedText = text.split(' ');

      return splitedText.length > 3
        ? `${splitedText[0]} ${splitedText[1]} ${splitedText[2]}...`
        : text;
    },
  },
  methods: {
    ...mapActions(['setCharacter', 'toggleCharacterSheet']),
    async openSheet() {
      const { data } = await this.$apollo.query({
        query: gql`
          query character($id: ID!) {
            character(id: $id) {
              name
            }
          }
        `,
        variables: {
          id: this.character.id,
        },
      });

      this.setCharacter(data.character);
      this.toggleCharacterSheet(true);
    },
  },
};
