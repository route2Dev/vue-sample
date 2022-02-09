<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="row">
      <div class="col">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Track Water (Options Api)</h5>
            <options-water-tracker />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Track Water (Composition Api)</h5>
            <composition-water-tracker />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import OptionsWaterTracker from '@/components/WaterTracker/OptionsComponent.vue';
import CompositionWaterTracker from '@/components/WaterTracker/CompositionComponent.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    OptionsWaterTracker,
    CompositionWaterTracker,
  },
});
</script>
