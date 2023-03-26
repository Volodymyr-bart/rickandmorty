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
  display: grid;
  grid-template-columns: 1fr;

  row-gap: 32px;

  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;

  li {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    a {
      display: flex;
      flex-direction: column;
      img {
        height: 232px;
      }
      div {
        margin: 12px auto 12px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5;
          letter-spacing: 0.25px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  li:hover,
  li:focus {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 200px);
    column-gap: 20px;
    li {
      a {
        img {
          height: 168px;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 226px);
    column-gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 240px);
    column-gap: 20px;
  }
}
</style>
