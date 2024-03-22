<script>
import ArrowComponents from "./ArrowComponents.vue";
export default {
  components: { ArrowComponents },

  props: {
    buttonType: String,
    iconLeft: Boolean,
    iconRight: Boolean,
    hasIcon: Boolean,
    hasText: Boolean,
    buttonColor: String,
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<template>
  <button
    @click="handleClick"
    type="button"
    :class="buttonType"
    :style="[
      buttonType == 'secondary-button'
        ? { color: buttonColor, borderColor: buttonColor }
        : { backgroundColor: buttonColor },
    ]"
  >
    <ArrowComponents v-if="buttonType == 'primary-button' && hasIcon && iconLeft" />
    <ArrowComponents
      :arrowColor="buttonColor"
      v-if="buttonType == 'secondary-button' && hasIcon && iconLeft"
    />

    <span v-if="hasText">Action</span>

    <ArrowComponents v-if="buttonType == 'primary-button' && hasIcon && iconRight" />

    <ArrowComponents
      :arrowColor="buttonColor"
      v-if="buttonType == 'secondary-button' && hasIcon && iconRight"
    />
  </button>
</template>

<style scoped>
.primary-button {
  margin: 0 auto;
  color: #1a1a1a;
}
.secondary-button {
  margin: 0 auto;
  background-color: #ffffff;
  border: 0.8px solid;
}
</style>
