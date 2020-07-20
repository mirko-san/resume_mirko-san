<template>
  <div>
    <h2>Skill</h2>
    <h3>JavaScript</h3>
    <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
      <div v-for="item in skills.JavaScript" :key="item.name">
        <SkillCard :item="item"></SkillCard>
      </div>
    </div>

    <h3>HTML</h3>
    <SkillCard :item="skills.HTML"></SkillCard>

    <h3>CSS</h3>
    <SkillCard :item="skills.CSS"></SkillCard>

    <h3>Python</h3>
    <SkillCard :item="skills.Python"></SkillCard>

    <h3>AWS</h3>
    <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
      <div v-for="item in skills.AWS" :key="item.name">
        <SkillCard :item="item"></SkillCard>
      </div>
    </div>

    <h3>os</h3>
    <ul class="uk-list uk-list-disc">
      <li v-for="(value, name, index) in skills.os" :key="index">
        {{ value }}
      </li>
    </ul>

    <h3>etc</h3>
    <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
      <div v-for="item in skills.etc" :key="item.name">
        <SkillCard :item="item"></SkillCard>
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
    console.log('hoge');
    console.log(skillJson);
  }
};
</script>
