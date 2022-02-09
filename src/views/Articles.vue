<template>
  <div class="container">
    <h2>Filter LearnVue Articles</h2>
    <div class="mb-3">
      <input
        type="search"
        class="form-control"
        placeholder="Filter Search"
        id="searchInput"
        v-model="query"
      />
    </div>
    <search-results :query="query" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import SearchResults from '@/components/articles/search-results/SearchResults.vue';

export default defineComponent({
  components: {
    SearchResults,
  },
  setup() {
    const query = ref('');
    return {
      query,
    };
  },
});
</script>
