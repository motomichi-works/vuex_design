<template>
  <div class="mod-frame-0001">
    <h2 class="mod-frame-0001__heading">
      FirstSection
    </h2>
    <div class="mod-frame-0001__body">
      <div class="mod-frame-0002">
        <h2>メールアドレス</h2>
        <FieldUnitText0001
          :module-names="[
            ...moduleNames,
            'emailFieldUnit',
          ]"
          :constraints="constraints"
          constraints-key="email"
        />
      </div>
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
    constraints: {
      type: Object,
      required: true,
    },
  },
};
</script>
