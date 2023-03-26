<template>
  <section class="px-1">
    <h2 class="regular m-3">Posts &lt3</h2>

    <div
      v-for="(item, i) of sortedArticles"
      :key="i"
      class="d-block mx-auto mb-5"
    >
      <div class="article-item rounded">
        <a :href="item._path">
          <nuxt-img
            format="webp"
            loading="lazy"
            :src="item.image"
            class="card-img-top rounded py-2"
            _alt="Image"
          />
        </a>
        <div class="card-body m-2">
          <div class="article-tags">
            <span
              v-for="(tag, j) of item.tags"
              :key="j"
              class="badge bg-custom float-start"
              >{{ tag }}</span
            >
            <span class="float-end">{{
              moment.unix(item.created, "YYYYMMDD").fromNow()
            }}</span>
          </div>
          <br />
          <h3 class="card-title h4">
            <a :href="item._path">{{ item.title }}</a>
          </h3>
          <p class="card-text mt-1 my-0 article-desc">{{ item.description }}</p>
        </div>
      </div>
      <hr class="mt-5" />
    </div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  props: ["articles"],
  data() {
    return {
      sortedArticles: [],
      moment,
    };
  },
  created() {
    this.sortedArticles = this?.$props.articles
      .filter((a) => a.visibility == 1)
      .sort((a, b) => b.created - a.created);
  },
};
</script>
