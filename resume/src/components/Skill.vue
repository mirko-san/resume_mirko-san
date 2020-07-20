<template>
  <div>
    <p>It is skill.vue</p>
  </div>
</template>

<script>
import skillJson from '@/assets/dist/json/skill.json';

export default {
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
