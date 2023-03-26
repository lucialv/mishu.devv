<template>
  <section v-if="discord && fetched">
    <span>Discord status</span>

    <div class="mt-1">
      <div class="row text-left">
        <nuxt-img
          format="webp"
          loading="lazy"
          :src="fetched?.avatar"
          width="auto"
          height="auto"
          class="avatar img-circle m-2 p-1 inline-block"
          alt="Avatar"
          style="border-radius: 50%"
        />
        <div class="inline-block discord-info">
          <span class="discord-username">{{ fetched.username }}</span
          ><span>#{{ fetched.discriminator }}</span>
          <span v-if="fetched.status" class="d-block">
            I'm currently <b class="text-success">ONLINE</b>.
            <span v-if="fetched.activity" class="d-block"
              >Playing: <b class="text-colored">{{ fetched.activity }}</b></span
            >
          </span>
          <span v-else class="d-block"
            >I'm currently <b class="text-danger">OFFLINE</b>.</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["discord", "favicon"],
  data() {
    return {
      fetched: null,
    };
  },
  methods: {
    startInterval() {
      const getStatus = async () => {
        try {
          const user = await $fetch(this?.$props.discord.info_url);
          if (!user.success)
            throw "Could not fetch Discord account information.";
          const status = (
            await $fetch(this?.$props.discord.widget_url)
          )?.members.find((u) => u.username == user.data.username);
          this.fetched = {
            username: user.data.username,
            discriminator: user.data.discriminator,
            avatar: user.data.avatar_url,
            status: status?.status,
            activity: status?.game?.name,
          };
        } catch (err) {
          console.error(err);
        }
      };

      getStatus();
      setInterval(() => getStatus(), 45000);
    },
  },
  mounted() {
    this.startInterval();
  },
};
</script>
