<template>
  <div class="mod-application">
    <FirstSection
      :module-names="[
        ...moduleNames,
        'firstSection',
      ]"
    />
  </div>
</template>

<script>
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
};
</script>
