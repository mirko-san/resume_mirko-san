<template>
  <div class="uk-container">
    <!-- <img
      alt="Vue logo"
      src="./assets/logo.png"
    /> -->
    <Profile />
    <Skill />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Profile from './components/Profile.vue'
import Skill from './components/Skill.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Profile,
    Skill
  }
};
</script>
