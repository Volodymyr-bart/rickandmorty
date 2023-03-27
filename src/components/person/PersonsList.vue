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
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;

  row-gap: 32px;

  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 200px);
    column-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 226px);
    column-gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 240px);
    row-gap: 20px;
  }
}
</style>
