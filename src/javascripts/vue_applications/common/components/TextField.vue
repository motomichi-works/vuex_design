<template>
  <section>
    <label>TextField: </label>
    <input
      :value="value"
      type="text"
      @input="onInput"
    >
    <div class="test-synced-text">
      value: {{ value }}
    </div>
    <div class="mod-error-messages">
      <ul class="mod-error-messages__list">
        <li class="mod-error-messages__item">
          sample message
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'TextField',
  computed: {
    ...mapState('textFieldUnit/textField', [
      'value',
    ]),
  },
  methods: {
    ...mapMutations('textFieldUnit/textField', [
      'setState',
    ]),
    onInput(e) {
      this.setState({
        key: 'value',
        value: e.target.value,
      });
    },
  },
}
</script>

<style lang="scss" scoped>
  .mod-error-messages {
    .mod-error-messages__list {
      box-sizing: border-box;
    }
    .mod-error-messages__item {
      color: #ff0000;
    }
  }
</style>