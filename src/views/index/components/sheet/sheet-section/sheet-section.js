export default {
  name: 'sheet-section',
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: Object,
      required: true,
    },
  },
  methods: {
    unknownText(field, suffix = null) {
      if (this.info[field] && this.info[field] !== 'unknown') {
        return this.info[field];
      }

      return `Unknown ${suffix}`;
    },
  },
};
