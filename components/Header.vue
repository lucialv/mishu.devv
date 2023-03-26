<template>
  <header>
    <client-only>
      <Particles
        class="position-absolute h-100 w-100"
        id="tsparticles"
        :options="options"
        :particles-init="particlesInit"
      />
    </client-only>

    <div class="center">
      <span class="regular">Hello, I'm</span>
      <h1 class="title" v-html="header"></h1>

      <div class="icons socials row text-center mt-4">
        <div v-for="(item, i) of settings.socials" :key="i" class="col">
          <a :href="item.url" target="_blank">
            <i :style="`color:${item.color}`" :class="item.icon"></i>
          </a>
        </div>
      </div>

      <div
        v-if="settings.favourites && settings.favourites.length > 0"
        class="icons favourite row text-center mt-4 px-2"
      >
        <h2 class="m-3 regular">What do I use</h2>
        <div v-for="(item, i) of settings.favourites" :key="i" class="col">
          <i :class="`${item} colored`"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { loadFull } from "tsparticles";

export default {
  props: ["settings"],
  data() {
    return {
      header: this.$config.env.header.replaceAll(/["']/g, ""),
      options: {
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 170,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.7,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "bubble",
              },
              onclick: {
                enable: false,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "#232741",
          },
        },
      },
    };
  },
  methods: {
    particlesInit: async (engine) => {
      await loadFull(engine);
    },
  },
};
</script>
