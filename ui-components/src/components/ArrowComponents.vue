<script>
// const props = defineProps({
//   arrowColor: {
//     String,
//     default: 'black'
// }
// });

export default {
  props: {
    arrowColor: {
      String,
      default: "black",
    },
  },
};
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 22 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :style="{ stroke: arrowColor }"
      d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
