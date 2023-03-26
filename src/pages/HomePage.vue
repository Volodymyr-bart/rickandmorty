<template>
  <div>
    <p v-if="!persons.length">Ничего не найдено</p>
    <PersonsList v-else :items="persons">
      <template v-slot:person="{ person }">
        <PersonHomeInfo
          :key="person.id"
          :id="person.id"
          :name="person.name"
          :image="person.image" />
      </template>
    </PersonsList>
  </div>
</template>

<script>
import { getPersons } from "@/services/person.service";
import PersonsList from "./../components/person/PersonsList.vue";
import PersonHomeInfo from "./../components/person/PersonHomeInfo.vue";

export default {
  name: "HomePage",
  components: { PersonsList, PersonHomeInfo },
  data() {
    return {
      persons: [],
      filter: "",
    };
  },
  async created() {
    try {
      const {
        data: { results },
      } = await getPersons();
      this.persons = results;
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
