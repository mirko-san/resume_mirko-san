<template>
  <div>
    <h2>Skill</h2>
    <h3>JavaScript</h3>
    <ul>
      <li v-for="item in skills.JavaScript" :key="item.name">
        <dl>
          <dt>{{ item.name }}</dt>
          <dd>
            <div>
              <span>business experience</span>
              <span>{{ item.businessExperience }}</span>
            </div>
            <p>{{ item.comment }}</p>
            <div v-if="item.sampleSource">
              <span>sample source code</span>
              <span>
                <a :href="item.sampleSource" target="_blank">
                  {{ item.sampleSource }}
                </a>
              </span>
            </div>
          </dd>
        </dl>
      </li>
    </ul>

    <h3>HTML</h3>
    <dl>
      <dt>HTML</dt>
      <dd>
        <div>
          <span>business experience</span>
          <span>{{ skills.HTML.businessExperience }}</span>
        </div>
        <p>{{ skills.HTML.comment }}</p>
      </dd>
    </dl>

    <h3>CSS</h3>
    <dl>
      <dt>CSS</dt>
      <dd>
        <div>
          <span>business experience</span>
          <span>{{ skills.CSS.businessExperience }}</span>
        </div>
        <p>{{ skills.CSS.comment }}</p>
      </dd>
    </dl>

    <h3>Python</h3>
    <dl>
      <dt>Python</dt>
      <dd>
        <div>
          <span>business experience</span>
          <span>{{ skills.Python.businessExperience }}</span>
        </div>
        <p>{{ skills.Python.comment }}</p>
      </dd>
    </dl>

    <h3>AWS</h3>
    <ul>
      <li v-for="item in skills.AWS" :key="item.name">
        <dl>
          <dt>{{ item.name }}</dt>
          <dd>
            <div>
              <span>business experience</span>
              <span>{{ item.businessExperience }}</span>
            </div>
            <p>{{ item.comment }}</p>
            <div v-if="item.sampleSource">
              <span>sample source code</span>
              <span>
                <a :href="item.sampleSource" target="_blank">
                  {{ item.sampleSource }}
                </a>
              </span>
            </div>
          </dd>
        </dl>
      </li>
    </ul>

    <h3>os</h3>
    <ul>
      <li v-for="(value, name, index) in skills.os" :key="index">
        {{ value }}
      </li>
    </ul>

    <h3>etc</h3>
    <ul>
      <li v-for="item in skills.etc" :key="item.name">
        <dl>
          <dt>{{ item.name }}</dt>
          <dd>
            <div>
              <span>business experience</span>
              <span>{{ item.businessExperience }}</span>
            </div>
            <p>{{ item.comment }}</p>
          </dd>
        </dl>
      </li>
    </ul>
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
