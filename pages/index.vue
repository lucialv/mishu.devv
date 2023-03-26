<template>
  <main>
    <Title>{{ config.env.title }} dev</Title>
    <Link rel="canonical" :href="`https://${config.env.domain}`" />

    <Header :settings="obj" />

    <div class="container mb-3">
      <div class="row">
        <div class="col-lg-8 px-3">
          <Articles v-if="posts && posts.length > 0" :articles="posts" />
        </div>

        <div class="col-lg-4 px-4">
          <aside>
            <Status
              v-if="obj.discord"
              :discord="obj.discord"
              :favicon="config.env.favicon"
            />

            <hr />

            <Quotes
              v-if="obj.quotes && obj.quotes.length > 0"
              :quotes="obj.quotes"
              class="mt-4"
            /><br />
            <hr />
            <nuxt-img
              v-if="obj.github?.widget_url"
              format="webp"
              loading="lazy"
              :src="obj.github.widget_url"
              alt="Github stats"
              class="p-0 m-0 w-100"
            />
            <hr />
            <nuxt-img
              v-if="obj.githuba?.stats_url"
              format="webp"
              loading="lazy"
              :src="obj.githuba.stats_url"
              alt="Github stats"
              class="p-0 m-0 w-100"
            />
            <hr />
            <a href="https://ko-fi.com/mishhuu">
              <nuxt-img
                format="webp"
                loading="lazy"
                src="https://cdn.discordapp.com/attachments/1077731148060438741/1089623351359717466/ELs9r2a.png"
                alt="Buy me a coffee"
                width="auto"
                height="auto"
                class="p-0 m-0 w-100"
                style="border-radius: 20px"
              />
            </a>
            <hr />
          </aside>
        </div>
      </div>
    </div>

    <Footer />
  </main>
</template>

<script setup>
const obj = await import("~/content/config.json");

const config = useRuntimeConfig();

const { data } = await useAsyncData(() =>
  queryContent().where({ visibility: 1 }).find()
);

const posts = data.value;
</script>
