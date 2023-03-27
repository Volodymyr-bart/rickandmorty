<template>
  <div>
    <router-link to="/">Back</router-link>
    <div class="person-card">
      <img class="person-card__photo" :src="person?.image" alt="" />
      <h2 class="person-title">{{ person?.name }}</h2>
      <p class="person-text">Informations</p>
      <ul class="person-card-list">
        <li class="person-card-list__item">
          <h3 class="person-card-list__title">Gender:</h3>
          <p class="person-card-list__text">{{ person?.gender }}</p>
        </li>
        <li class="person-card-list__item">
          <h3 class="person-card-list__title">Status:</h3>
          <p class="person-card-list__text">{{ person?.status }}</p>
        </li>
        <li class="person-card-list__item">
          <h3 class="person-card-list__title">Species:</h3>
          <p class="person-card-list__text">{{ person?.species }}</p>
        </li>
        <li class="person-card-list__item">
          <h3 class="person-card-list__title">Origin:</h3>
          <p class="person-card-list__text">{{ person?.origin.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getPersonById } from "./../services/person.service";
export default {
  name: "PersonPage",
  data() {
    return {
      person: null,
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const { data } = await getPersonById(id);
      this.person = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.person-card {
  width: fit-content;
  margin: 124px auto 0;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;

  .person-text {
    margin-top: 35px;

    text-align: start;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.15px;

    color: #8e8e93;
  }

  .person-card-list {
    margin-top: 16px;

    display: flex;
    flex-direction: column;
    gap: 9px;
    li {
      h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.15px;
        color: #081f32;
      }
      p {
        margin-top: 6px;

        text-align: start;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;
        letter-spacing: 0.25px;
        color: #6e798c;
      }
      p::after {
        content: "";
        margin-top: 17px;
        width: 100%;
        height: 1px;

        display: block;
        background: rgba(33, 33, 33, 0.08);
      }
    }
  }

  .person-card__photo {
    align-self: center;
    width: 150px;
    height: 150px;
    border: 5px solid #f2f2f7;
    border-radius: 50%;
  }

  .person-title {
    align-self: center;
    margin-top: 34px;

    font-weight: 400;
    font-size: 32px;
    line-height: 1.19;

    color: #081f32;
    text-align: center;
  }

  @media screen and (min-width: 1200px) {
    margin: 76px auto 0;

    .person-card__photo {
      width: 300px;
      height: 300px;
    }

    .person-title {
      margin-top: 16px;

      font-size: 48px;
      line-height: 1.17;
    }

    p {
      margin-top: 48px;

      text-align: center;
    }
    ul {
      margin-top: 48px;

      display: flex;
      flex-direction: column;
      gap: 9px;
      li {
        p {
          margin-top: 6px;

          text-align: start;
        }
      }
    }
  }
}
</style>
