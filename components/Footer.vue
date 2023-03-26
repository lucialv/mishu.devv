<template>
  <footer class="text-center m-1">
    <span class="align"
      >Copyright {{ new Date().getFullYear() }} | Created using
      <i class="devicon-nuxtjs-plain colored"></i> by
      <a href="https://mishu.dev" target="_blank">Mishu</a>.</span
    >
    <span v-if="useRoute().path == '/'" class="add-label"
      ><a href="https://www.freepik.com/vectors/cartoon-space" target="_blank"
        >Cartoon space vector</a
      >
      created by mishu -
      <a href="https://freepik.com" target="_blank">freepik.com</a>.</span
    >
  </footer>
</template>
