<template>
  <div>
    <h1>Dynamic</h1>
    <h2>{{ $route.params.slug }}</h2>
    <NuxtLink to="/">Home Page</NuxtLink>
    <!-- <pre>{{ $data }}</pre> -->
    <!-- <pre>{{ $data }}</pre> -->
    <p v-if="$fetchState.pending">Fetching planets</p>
    <p v-else-if="$fetchState.error">Error</p>
    <ul v-else>
      <li v-for="planet in planets" :key="planet.slug">
        <NuxtLink :to="planet.slug">{{ planet.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planets: [],
    };
  },
  async fetch() {
    this.planets = await fetch(`https://api.nuxtjs.dev/planets`).then((res) =>
      res.json()
    )

    // .then((res) => res.json())
    // .then(
    //   (res) => res.json
    // )
  },
}
</script>
