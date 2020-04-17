<template>
  <div class="mod-field-unit-text-0001">
    <label
      v-if="label !== ''"
      :for="name"
      class="mod-field-unit-text-0001__label"
    >
      {{ label }}
    </label>
    <div class="mod-field-unit-text-0001__field-wrapper">
      <Field
        :module-names="[
          ...moduleNames,
          'field',
        ]"
        :name="name"
        :initial-value="initialValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :is-disabled="isDisabled"
        :is-will-set-initial-value="isWillSetInitialValue"
        :constraints="constraints"
        :constraints-key="constraintsKey"
      />
    </div>
    <div
      v-if="description !== ''"
      class="mod-field-unit-text-0001__description"
    >
      {{ description }}
    </div>
    <div class="mod-field-unit-text-0001__error-messages-wrapper">
      <ul>
        <li>
          {{ realtimeErrors }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// utilities
import getLocalStete from '@/javascripts/utilities/getLocalState.js';
import mappedSetState from '@/javascripts/utilities/mappedSetState.js';
// components
import Field from '@/javascripts/vue/common/field/type_text_0001';

export default {
  components: {
    Field,
  },
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
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    constraints: {
      type: Object,
      required: true,
    },
    constraintsKey: {
      type: String,
      default: 'noValidation',
    },
  },
  computed: {
    modulePath () {
      return this.moduleNames.join('/');
    },
    localState () {
      return this.getLocalStete(this.$store.state, this.moduleNames);
    },
    realtimeErrors () {
      return this.localState.field.realtimeErrors;
    },
  },
  methods: {
    getLocalStete,
    mappedSetState,
  },
};
</script>
<style lang="scss" scoped>

</style>
