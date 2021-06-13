import gql from 'graphql-tag';
import Card from './components/card/card.vue';
import Sheet from './components/sheet/sheet.vue';
import LoadingScreen from './components/loading-screen/loading-screen.vue';
import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    Card,
    Sheet,
    LoadingScreen,
  },
  data() {
    return {
      searchInput: '',
      characters: [],
    };
  },
  methods: {
    ...mapActions(['toggleLoadingScreen']),
    searchCharacter() {
      this.characters = [];
      this.toggleLoadingScreen(true);

      this.$apollo
        .query({
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
        })
        .then(({ data }) => {
          this.characters = data.characters.results;
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.toggleLoadingScreen(false);
        });
    },
  },
};
