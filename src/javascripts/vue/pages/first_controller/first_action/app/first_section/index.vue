<template>
  <div class="mod-frame-0001">
    <h2 class="mod-frame-0001__heading">
      FirstSection
    </h2>
    <div class="mod-frame-0001__body">
      <div class="mod-frame-0002">
        <Heading0002
          main-text="メールアドレス"
        />
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
import Heading0002 from '@/javascripts/vue/common/heading_0002';
import FieldUnitText0001 from '@/javascripts/vue/common/field_unit/text_0001';

export default {
  components: {
    Heading0002,
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
