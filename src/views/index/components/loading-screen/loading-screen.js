import { mapState } from 'vuex';

export default {
  name: 'loading-screen',
  computed: {
    ...mapState(['loadingScreen']),
  },
};
