<template>
  <div>
    <h2>Profile</h2>
    <p>名前 : {{ profile.personalInfo.name }}</p>
    <p>
      年齢 : {{ age }}
      <span class="uk-text-muted">
        ( {{ new Date().toLocaleDateString('ja-JP') }} 現在 )
      </span>
    </p>
    <p>住所 : {{ profile.personalInfo.address }}</p>
    <div>
      連絡先
      <ul>
        <li v-for="item in profile.personalInfo.contact" :key="item">
          {{ Object.keys(item)[0] }} : {{ Object.values(item)[0] }}
        </li>
      </ul>
    </div>

    <h3>学歴</h3>
    <ul>
      <li v-for="item in profile.education" :key="item">
          {{ item.start }} ～ {{ item.end }} : {{ item.data }}
      </li>
    </ul>
  </div>
</template>

<script>
// import SkillCard from './SkillCard.vue';
import profileJson from '@/assets/dist/json/profile.json';

export default {
  components: {
    // SkillCard
  },
  data: function() {
    return {
      profile: profileJson
    };
  },
  computed: {
    age: function() {
      const birth = new Date(this.profile.personalInfo.birthDate);
      const currentDate = new Date();
      const thisYearBirthDay = new Date(
        currentDate.getFullYear(),
        birth.getMonth(),
        birth.getDate()
      );
      let age;
      // もう誕生日が来た
      if (thisYearBirthDay < currentDate) {
        age = currentDate.getFullYear() - birth.getFullYear();
      } else {
        age = currentDate.getFullYear() - birth.getFullYear() - 1;
      }

      return age;
    }
  },
  created() {
    console.log(this.profile);
  }
};
</script>
