<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      persons: [],
      filter: "",
    };
  },
  async created() {
    try {
      // const { data } = await getApartmentList();
      // this.apartments = data;
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
