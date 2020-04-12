<template>
  <div class="mod-frame-0001">
    <h2 class="mod-frame-0001__heading">
      FirstSection
    </h2>
    <div class="mod-frame-0001__body">
      <FieldUnitText0001
        :module-names="[
          ...moduleNames,
          'emailFieldUnit',
        ]"
      />
    </div>
  </div>
</template>

<script>
// components
import FieldUnitText0001 from '@/javascripts/vue/common/field_unit/text_0001';

export default {
  components: {
    FieldUnitText0001,
  },
  props: {
    moduleNames: {
      type: Array,
      required: true,
    },
  },
};
</script>
