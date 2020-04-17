<template>
  <div class="mod-application">
    <FirstSection
      :module-names="[
        ...moduleNames,
        'firstSection',
      ]"
      :constraints="constraints"
    />
  </div>
</template>

<script>
// utilities
import constraints from '@/javascripts/utilities/validator/pages/first_controller/first_action/constraints.js';
// components
import FirstSection from '@/javascripts/vue/pages/first_controller/first_action/app/first_section';

export default {
  components: {
    FirstSection,
  },
  props: {
    moduleNames: {
      type: Array,
      required: true,
    },
  },
  computed: {
    constraints () {
      return constraints;
    },
  },
};
</script>
