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
    openSheet() {
      this.$emit('openSheet', this.character);
    },
  },
};
