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
import { defineComponent } from '@vue/composition-api';
import { useWaterTracker } from '@/components/WaterTracker/use-water-tracker';

export default defineComponent({
  setup() {
    // const cupsOfWater = ref(0); // data = ref(default value)
    // function drinkCup() {
    //   cupsOfWater.value++;
    // }

    // const lastCup = ref('');
    // watch(cupsOfWater, () => {
    //   lastCup.value = new Date().toTimeString();
    // });

    // const date = ref('');
    // onMounted(() => {
    //   date.value = new Date().toDateString();
    // });

    // return {
    //   cupsOfWater,
    //   date,
    //   drinkCup,
    //   lastCup,
    // };

    return { ...useWaterTracker() };
  },
});
</script>
