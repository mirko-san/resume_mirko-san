<template>
  <div class="uk-card uk-card-default uk-card-body">
    <h3 class="uk-card-title">{{ item.name }}</h3>
    <div>
      <span>business experience</span>
      <span v-if="item.businessExperience" class="uk-label uk-label-success">
        {{ item.businessExperience }}
      </span>
      <span v-else class="uk-label uk-label-danger">
        {{ item.businessExperience }}
      </span>
    </div>
    <p v-if="item.comment" class="uk-text-left">{{ item.comment }}</p>
    <div v-if="item.sampleSource">
      <span>sample source code</span>
      <span>
        <a :href="item.sampleSource" target="_blank">
          {{ item.sampleSource }}
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    item: Object
  }
};
</script>
