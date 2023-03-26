<template>
  <section class="mb-3">
    <span>Some of my public repositories</span>
    <div v-if="repos && repos.length > 0" id="summary">
      <div class="collapse" id="collapseSummary">
        <div class="row text-center mb-3">
          <div
            v-for="(item, i) of repos"
            :key="i"
            class="p-2 d-block mx-auto col-sm-12 col-md-6"
          >
            <div class="card-body repo-item rounded m-2 p-2 h-100">
              <h3 class="card-title repo-title">
                <a :href="item.html_url" target="_blank">{{
                  item.full_name
                }}</a>
              </h3>
              <h4 class="card-subtitle repo-subtitle mb-2 text-muted">
                {{ item.language }}
              </h4>
              <p class="card-text repo-desc">{{ item.description }}</p>
              <div class="repo-tags">
                <span class="badge bg-custom"
                  ><i class="fa-solid fa-star"></i>
                  {{ item.stargazers_count }}</span
                >
                <span class="badge bg-custom"
                  ><i class="fa-solid fa-calendar-plus"></i>
                  {{ moment(item.created_at, "YYYYMMDD").fromNow() }}</span
                >
                <span class="badge bg-custom"
                  ><i class="fa-solid fa-pen-to-square"></i>
                  {{ moment(item.updated_at, "YYYYMMDD").fromNow() }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="show-more collapsed"
        data-bs-toggle="collapse"
        href="#collapseSummary"
        aria-expanded="false"
        aria-controls="collapseSummary"
      ></a>
    </div>
    <p v-else class="text-muted">
      I don't have any public repositories yet or could not get them.
    </p>
  </section>
</template>

<script>
import moment from "moment";

export default {
  props: ["url"],
  data() {
    return {
      moment,
      repos: null,
    };
  },
  async created() {
    this.repos = (await $fetch(this?.$props.url))
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  },
};
</script>
