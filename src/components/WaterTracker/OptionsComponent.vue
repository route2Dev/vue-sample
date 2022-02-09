<template>
  <div>
    <h2>{{ date }}</h2>
    <p>I drank {{ cupsOfWater }} cups of water today 🥤</p>
    <button class="btn btn-outline-primary" @click="drinkCup">
      Drink a cup
    </button>
    <p class="mt-3" v-if="cupsOfWater > 0">
      I drank the last cup at {{ lastCup }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface ComponentData {
  cupsOfWater: number;
  date: string;
  lastCup: string;
}

export default Vue.extend({
  data(): ComponentData {
    return {
      cupsOfWater: 0,
      date: '',
      lastCup: '',
    };
  },
  methods: {
    drinkCup(): void {
      this.cupsOfWater++;
    },
  },
  watch: {
    cupsOfWater: function (): void {
      this.lastCup = new Date().toTimeString();
    },
  },
  mounted(): void {
    this.date = new Date().toDateString();
  },
});
</script>
