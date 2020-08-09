<template>
  <div>
    <h2>Skill</h2>
    <div class="uk-margin-large-bottom" v-for="item in Object.keys(skills)" :key="item">
      <h3>{{ item }}</h3>
      <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
        <div v-for="itemName in skills[item]" :key="itemName.name">
          <SkillCard :item="itemName"></SkillCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from './SkillCard.vue';
import skillJson from '@/assets/dist/json/skill.json';

export default {
  components: {
    SkillCard
  },
  data: function() {
    return {
      skills: skillJson.skill
    };
  },
  created() {
  }
};
</script>
