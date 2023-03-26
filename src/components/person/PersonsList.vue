<template>
  <ul class="list-person">
    <template v-for="person in items">
      <slot name="person" v-bind:person="person"></slot>
    </template>
  </ul>
</template>

<script>
export default {
  name: "PersonsList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.list-person {
}
</style>
