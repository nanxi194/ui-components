<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <svg
      v-if="iconLeft && hasIcon"
      width="24"
      height="24"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="black"
        d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span v-if="hasText">{{ label }}</span>
    <svg
      v-if="iconRight && hasIcon"
      width="24"
      height="24"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="black"
        d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script>
import "./button.css";
import { reactive, computed } from "vue";

export default {
  name: "my-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
    hasIcon: {
      type: Boolean,
      default: true,
    },
    hasText: {
      type: Boolean,
      default: true,
    },
    iconLeft: {
      type: Boolean,
      default: true,
    },
    iconRight: {
      ype: Boolean,
      default: false,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "storybook-button": true,
        "storybook-button--primary": props.primary,
        "storybook-button--secondary": !props.primary,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
