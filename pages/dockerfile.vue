<template>
  <div style="width: 600px">
    <codemirror
        v-model="code"
        placeholder="Code goes here..."
        language="javascript"
        :style="{ height: '400px' }"
        :autofocus="true"
        :extensions="extensions"
        :indent-with-tab="true"
        :tab-size="2"
    />
  </div>
  <button>Build</button>
  {{ code }}
</template>
<script setup>
import {StreamLanguage} from "@codemirror/language"
import {dockerFile} from "@codemirror/legacy-modes/mode/dockerfile"

const code = ref("")

const { data, pending, error, refresh } = await useFetch("/api/dockerfile/1")
code.value = JSON.parse(data.value)[0].content
const extensions = computed(() => {
  return [StreamLanguage.define(dockerFile)]
})


</script>