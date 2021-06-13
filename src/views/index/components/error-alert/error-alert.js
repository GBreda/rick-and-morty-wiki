import { mapState, mapActions } from 'vuex';

export default {
  name: 'error-alert',
  computed: {
    ...mapState(['errorAlert']),
  },
  methods: {
    ...mapActions(['toggleErrorAlert']),
  },
  watch: {
    errorAlert(value) {
      if (value) {
        setTimeout(() => {
          this.toggleErrorAlert(false);
        }, 3000);
      }
    },
  },
};
