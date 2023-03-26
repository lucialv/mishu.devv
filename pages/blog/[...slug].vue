<template>
  <main class="mt-5">
    <Title>{{ selected?.title }} - {{ config.env.title }}</Title>
    <Meta name="description" :content="selected?.description" />
    <Meta name="keywords" :content="selected?.keywords" />

    <Meta property="og:title" :content="selected?.title" />
    <Meta property="og:description" :content="selected?.description" />
    <Meta property="og:image" :content="selected?.image" />
    <Meta property="og:image:width" content="2400" />
    <Meta property="og:image:height" content="1100" />
    <Meta property="og:type" content="article" />

    <Meta name="twitter:title" :content="selected?.title" />
    <Meta name="twitter:description" :content="selected?.description" />
    <Meta name="twitter:image" :content="selected?.image" />
    <Meta name="twitter:card" content="summary_large_image" />

    <Link
      rel="canonical"
      :href="`https://${config.env.domain}${route.fullPath}`"
    />

    <div class="container my-5 article-content">
      <h1 class="text-center my-5 article-title-page">{{ selected?.title }}</h1>

      <Navbar
        :pages="[
          {
            name: 'Blog',
            url: '/',
          },
          {
            name: selected?.title,
            active: true,
          },
        ]"
      />

      <div class="article-tags mt-2">
        <span
          v-for="(tag, i) of selected?.tags"
          :key="i"
          class="badge bg-custom float-start"
          >{{ tag }}</span
        >
        <span class="float-end">{{
          moment.unix(selected?.created).format("DD MMMM YYYY HH:mm")
        }}</span>
      </div>
      <br />

      <div class="row mt-2">
        <div class="col-sm-12 col-lg-9">
          <nuxt-img
            format="webp"
            loading="lazy"
            alt="Cover image"
            class="rounded w-100"
            :src="selected?.image"
          />
          <ContentDoc :path="route.fullPath" tag="article" class="px-2" />
        </div>
        <Toc
          :links="selected?.body?.toc?.links"
          class="col-sm-12 col-lg-3 d-none d-lg-inline"
        />
      </div>
    </div>

    <Footer />
  </main>
</template>

<script setup>
import moment from "moment";
import hljs from "highlight.js";
import { onMounted } from "vue";

const config = useRuntimeConfig();
const route = useRoute();

const { data } = await useAsyncData(
  "Content",
  async () => await queryContent().where({ _path: route.fullPath }).findOne()
);
const selected = data.value;

onMounted(() =>
  document
    .querySelectorAll("pre")
    .forEach((block) => hljs.highlightBlock(block))
);
</script>
