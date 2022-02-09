import { onMounted, ref, Ref, watch } from '@vue/composition-api';

interface WaterTrackData {
  cupsOfWater: Ref<number>;
  date: Ref<string>;
  drinkCup: () => void;
  lastCup: Ref<string>;
}

export const useWaterTracker = (): WaterTrackData => {
  const cupsOfWater = ref(0); // data = ref(default value)
  function drinkCup() {
    cupsOfWater.value++;
  }

  const lastCup = ref('');
  watch(cupsOfWater, () => {
    lastCup.value = new Date().toTimeString();
  });

  const date = ref('');
  onMounted(() => {
    date.value = new Date().toDateString();
  });

  return {
    cupsOfWater,
    date,
    drinkCup,
    lastCup,
  };
};
