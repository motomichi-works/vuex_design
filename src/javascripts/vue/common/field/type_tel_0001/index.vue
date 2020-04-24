<template>
  <div class="mod-field-type-basic-0001">
    <input
      v-model="value"
      class="mod-field-type-basic-0001__field"
      type="tel"
      :name="name"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="isDisabled"
      @blur="handleBlur(self, $event)"
    >
  </div>
</template>
<script>
// utilities
import validate from 'validate.js';
import getLocalStete from '@/javascripts/utilities/getLocalState.js';
import mappedSetState from '@/javascripts/utilities/mappedSetState.js';
import toggleErrorMessages from '@/javascripts/utilities/toggleErrorMessages.js';

export default {
  props: {
    moduleNames: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    initialValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    maxlength: {
      type: String,
      default: '',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isWillSetInitialValue: {
      type: Function,
      default (self) {
        return self.isCreatedOnce;
      },
    },
    constraints: {
      type: Object,
      required: true,
    },
    constraintsKey: {
      type: String,
      default: 'noValidation',
    },
    handleInput: {
      type: Function,
      default (self, value) {
        // NOTE: この関数はIME入力が確定されたタイミングで実行されます。
        self.mappedSetState({
          key: 'value',
          value,
        }, self.modulePath);

        const eventDummy = {
          target: {
            value,
          },
        };

        self.toggleErrorMessages({
          value,
          validate,
          constraints: self.constraints,
          constraintsKey: self.constraintsKey,
          isBlured: self.isBlured,
          modulePath: self.modulePath,
          event: eventDummy,
        });
      },
    },
    handleBlur: {
      type: Function,
      default (self, event) {
        self.mappedSetState({
          key: 'isBlured',
          value: true,
        }, self.modulePath);

        self.mappedSetState({
          key: 'value',
          value: event.target.value,
        }, self.modulePath);

        const value = event.target.value;
        self.toggleErrorMessages({
          value,
          validate,
          constraints: self.constraints,
          constraintsKey: self.constraintsKey,
          isBlured: self.isBlured,
          modulePath: self.modulePath,
          event,
        });
      },
    },
    handleWatchValue: {
      type: Function,
      default (self, value, oldValue) {

      },
    },
    handleCreated: {
      type: Function,
      default (self) {

      },
    },
    handleMounted: {
      type: Function,
      default (self) {

      },
    },
  },
  computed: {
    self () {
      return this;
    },
    modulePath () {
      return this.moduleNames.join('/');
    },
    localState () {
      return this.getLocalStete(this.$store.state, this.moduleNames);
    },
    isBlured () {
      return this.localState.isBlured;
    },
    value: {
      get () {
        return this.localState.value;
      },
      set (newValue) {
        this.handleInput(this, newValue);
      },
    },
  },
  watch: {
    value (value, oldValue) {
      this.handleWatchValue(this, value, oldValue);
    },
  },
  created () {
    this.handleCreated(this);
  },
  mounted () {
    this.handleMounted(this);
  },
  methods: {
    getLocalStete,
    mappedSetState,
    toggleErrorMessages,
  },
};
</script>
<style lang="scss" scoped>
  .mod-field-type-basic-0001 {
    display: block;
    .mod-field-type-basic-0001 {
      display: block;
    }
  }
</style>
