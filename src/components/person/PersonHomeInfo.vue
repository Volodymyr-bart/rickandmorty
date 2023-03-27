<template>
  <li class="persons-item">
    <router-link :to="{ name: 'person', params: { id } }">
      <img :src="image" alt="{{name}}" class="persons-item__photo" />
      <div>
        <p class="person-item__name">{{ name }}</p>
        <p class="person-item__species">{{ species }}</p>
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
    species: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.persons-item {
  margin: 0;
  padding: 0;
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
    }
  }
  &__name {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }
  &__species {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }
}
.persons-item:hover,
.persons-item:focus {
  cursor: pointer;
  transform: scale(1.1);
}

.persons-item {
  a {
    img {
      height: 168px;
    }
  }
}
</style>
