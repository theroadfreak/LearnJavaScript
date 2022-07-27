<script>
import ChildComp from "./components/ChildComp.vue";

export default {
  components: {
    ChildComp,
  },
  data() {
    return {
      msg: "from parent",
      view: true,
    };
  },
  methods: {
    click() {
      this.view = !this.view;
    },
  },
};
</script>

<template>
  <ChildComp />

  <button @click="click()">Press me</button>
  <h1 v-if="view">Dushan</h1>
</template>
