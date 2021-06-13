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
    ...mapActions([
      'setCharacter',
      'toggleCharacterSheet',
      'toggleLoadingScreen',
      'toggleErrorAlert',
    ]),
    openSheet() {
      this.toggleLoadingScreen(true);

      this.$apollo
        .query({
          query: gql`
            query character($id: ID!) {
              character(id: $id) {
                name
                id
                image
                gender
                species
                status
                origin {
                  name
                  type
                  dimension
                  residents {
                    name
                  }
                }
                location {
                  name
                  type
                  dimension
                  residents {
                    name
                  }
                }
                episode {
                  air_date
                }
              }
            }
          `,
          variables: {
            id: this.character.id,
          },
        })
        .then(({ data }) => {
          this.setCharacter(data.character);
          this.toggleCharacterSheet(true);
        })
        .catch(() => this.toggleErrorAlert(true))
        .finally(() => {
          this.toggleLoadingScreen(false);
        });
    },
  },
};
