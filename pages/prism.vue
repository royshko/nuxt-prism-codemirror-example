<template>
  <pre class="language-yaml">
    <code class="language-yaml" v-html="code"></code>
  </pre>
  <button  class="float-right" @click="refresh">Refresh</button>
</template>
<script setup>
import * as Prism from "prismjs"
import 'prismjs/components/prism-yaml';

const { data, pending, error, refresh } = await useFetch("/api/yaml")

let code = computed(() => {
  return Prism.highlight(data.value.yaml, Prism.languages.yaml, 'yaml');
})


</script>