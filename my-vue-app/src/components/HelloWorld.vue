<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(2);
var test = "dusha";
</script>

<template>
  <h1>{{ test }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
