<template>
  <nav class="mt-3" aria-label="breadcrumb">
    <ol class="breadcrumb m-1">
      <li
        v-for="(item, i) of pages"
        :key="i"
        :aria-current="item.active ? 'page' : null"
        v-bind:class="item.active ? 'active' : null"
        class="breadcrumb-item"
      >
        <span v-if="item.active">{{ item.name }}</span>
        <a v-else :href="item.url">{{ item.name }}</a>
      </li>
    </ol>
  </nav>
</template>

<script setup>
const props = defineProps({
  pages: Object,
});
const { pages } = toRefs(props);
</script>
