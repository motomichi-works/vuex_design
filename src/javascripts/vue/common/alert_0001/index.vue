<template>
  <ul
    v-if="messages.length > 0"
    class="mod-alert-0001"
  >
    <li
      v-for="message in messages"
      :key="message"
      class="mod-alert-0001__item"
    >
      {{ message }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => ([]),
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
