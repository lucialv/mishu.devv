<template>
  <section>
    <span>Random quote</span>

    <blockquote class="blockquote border-0 p-0 mt-1">
      <p class="font-italic lead">
        <i class="fa fa-quote-left mr-3 text-colored"></i>
        {{ quotes[quote].quote }}
        <i class="fa fa-quote-right mr-3 text-colored"></i>
      </p>
      <footer class="blockquote-footer float-end">
        {{ quotes[quote].author }}
      </footer>
    </blockquote>
  </section>
</template>

<script setup>
const props = defineProps({
  quotes: Object,
});

const { quotes } = toRefs(props);

const quote = Math.floor(Math.random() * props.quotes.length);
</script>
