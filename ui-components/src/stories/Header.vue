<template>
  <section class="notification-card">
    <div class="card">
      <svg
        class="svg-icon"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63619 23.3638 2.66666 16 2.66666C8.63622 2.66666 2.66669 8.63619 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333ZM17.3334 10.6667C17.3334 9.93028 16.7364 9.33332 16 9.33332C15.2636 9.33332 14.6667 9.93028 14.6667 10.6667C14.6667 11.403 15.2636 12 16 12C16.7364 12 17.3334 11.403 17.3334 10.6667ZM16 22.6667C16.7364 22.6667 17.3334 22.0697 17.3334 21.3333V14.6667C17.3334 13.9303 16.7364 13.3333 16 13.3333C15.2636 13.3333 14.6667 13.9303 14.6667 14.6667V21.3333C14.6667 22.0697 15.2636 22.6667 16 22.6667Z"
          fill="#2C75DD"
        />
      </svg>
      <div class="card-text">
        <p v-if="showTitle" class="notification-title">A short descriptive header</p>
        <p v-if="showContent" class="notification-details">
          This is a paragh of information with additional supporting detail or links to
          help the user understand what they should do.
        </p>
        <div v-if="showButton" class="notification-buttons">
          <my-button :hasIcon="false" @click="$emit('Action')" label="Action" />
          <my-button :hasIcon="false" primary @click="$emit('Action')" label="Action" />
        </div>
      </div>
      <svg
        class="svg-icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4L16 16M16 4L4 16"
          stroke="#566271"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import "./header.css";
import MyButton from "./Button.vue";

export default {
  name: "my-header",

  components: { MyButton },

  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
    showContent: {
      type: Boolean,
      default: true,
    },
    showButton: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
