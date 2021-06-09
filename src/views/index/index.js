import gql from 'graphql-tag';
import BaseButton from '../../shared/components/base-button/base-button.vue';
import SearchInput from './components/search-input/search-input.vue';
import Card from './components/card/card.vue';

export default {
  name: 'home',
  components: {
    BaseButton,
    SearchInput,
    Card,
  },
  data() {
    return {
      characters: [],
    };
  },
  apollo: {
    characters: {
      query: gql`
        query characters($page: Int, $filter: FilterCharacter) {
          characters(page: $page, filter: $filter) {
            results {
              id
              name
              image
              status
              species
            }
          }
        }
      `,
      variables() {
        return {
          page: 1,
          filter: { name: 'Rick' },
        };
      },
      result({ data }) {
        this.characters = data.characters.results;
      },
    },
  },
};
