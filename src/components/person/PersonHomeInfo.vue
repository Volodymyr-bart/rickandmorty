<template>
  <li class="persons-item">
    <router-link :to="{ name: 'person', params: { id } }">
      <div class="persons-item__inner">
        <img :src="image" alt="{{name}}" class="persons-item__photo" />
        <p>{{ name }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "PersonHomeInfo",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
