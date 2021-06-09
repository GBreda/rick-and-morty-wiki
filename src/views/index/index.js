import gql from 'graphql-tag';
import Card from './components/card/card.vue';
import Sheet from './components/sheet/sheet.vue';

export default {
  name: 'home',
  components: {
    Card,
    Sheet,
  },
  data() {
    return {
      searchInput: '',
      characters: [],
    };
  },
  methods: {
    async searchCharacter() {
      const { data } = await this.$apollo.query({
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
        variables: {
          filter: { name: this.searchInput },
        },
      });

      this.characters = data.characters.results;
    },
  },
};
