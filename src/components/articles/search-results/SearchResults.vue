<template>
  <div class="container">
    <p v-if="query" class="text-end m-0 small">
      Showing {{ filteredTitles.length }} results for "{{ query }}"
    </p>
    <p v-else class="text-end m-0 small">
      Showing {{ filteredTitles.length }} results
    </p>
    <ul class="mt-3">
      <li v-for="title in filteredTitles" :key="title.Page">
        <highlight-words
          :highlightTag="tag"
          :searchWords="searchWords"
          :autoEscape="true"
          :textToHighlight="title.Name"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import titles from '@/titles.json';
import { computed, defineComponent, ref } from '@vue/composition-api';
import HighlightWords from 'vue-highlight-words';
import StrongSlot from '@/components/strong-slot/StrongSlot.vue';

export default defineComponent({
  props: {
    query: String,
  },
  components: {
    HighlightWords,
  },
  setup(props) {
    const filteredTitles = computed(() => {
      return titles.filter((s) =>
        s.Name.toLowerCase().includes(props.query?.toLowerCase() || '')
      );
    });

    const searchWords = computed(() => {
      return props.query?.split(' ') || [];
    });

    const tag = ref(StrongSlot);

    return { tag, searchWords, filteredTitles };
  },
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  width: 50px 0;
  padding: 0;
  // border: 1px solid #ddd;
}
li {
  text-align: left;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}
li:nth-last-of-type(1) {
  border-bottom: none;
  margin-bottom: inherit;
}
</style>
