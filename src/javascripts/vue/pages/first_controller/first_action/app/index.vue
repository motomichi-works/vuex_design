<template>
  <div class="mod-application">
    <Heading0001
      main-text="Vuex設計サンプル"
    />
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
import Heading0001 from '@/javascripts/vue/common/heading_0001';
import FirstSection from '@/javascripts/vue/pages/first_controller/first_action/app/first_section';

export default {
  components: {
    Heading0001,
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
