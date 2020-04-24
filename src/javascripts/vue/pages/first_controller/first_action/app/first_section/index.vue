<template>
  <div class="mod-frame-0001">
    <h2 class="mod-frame-0001__heading">
      FirstSection
    </h2>
    <div class="mod-frame-0001__body">
      <div class="mod-frame-0002">
        <Heading0002
          main-text="電話番号"
        />
        <FieldUnitTel0001
          :module-names="[
            ...moduleNames,
            'phoneNumberFieldUnit',
          ]"
          :constraints="constraints"
          constraints-key="phoneNumber"
        />
      </div>
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
import FieldUnitTel0001 from '@/javascripts/vue/common/field_unit/tel_0001';
import FieldUnitText0001 from '@/javascripts/vue/common/field_unit/text_0001';

export default {
  components: {
    Heading0002,
    FieldUnitTel0001,
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
