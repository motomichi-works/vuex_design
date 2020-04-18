<template>
  <h2 class="mod-heading-0002">
    {{ mainText }}
  </h2>
</template>

<script>
export default {
  props: {
    mainText: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
