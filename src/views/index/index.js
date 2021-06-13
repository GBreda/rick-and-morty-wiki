import gql from 'graphql-tag';
import Card from './components/card/card.vue';
import Sheet from './components/sheet/sheet.vue';
import LoadingScreen from './components/loading-screen/loading-screen.vue';
import ErrorAlert from './components/error-alert/error-alert.vue';
import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    Card,
    Sheet,
    LoadingScreen,
    ErrorAlert,
  },
  data() {
    return {
      searchInput: '',
      characters: [],
    };
  },
  methods: {
    ...mapActions(['toggleLoadingScreen', 'toggleErrorAlert']),
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
        .catch(() => {
          this.searchInput = '';
          this.toggleErrorAlert(true);
        })
        .finally(() => {
          this.toggleLoadingScreen(false);
        });
    },
  },
};
