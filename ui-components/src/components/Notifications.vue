<script setup>
import { ref } from "vue";
import ButtonComponents from "./ButtonComponents.vue";
import NotificationIcons from "./NotificationIcons.vue";

const props = defineProps({
  notificationType: { String, default: "info" },
  showTitle: Boolean,
  showContent: Boolean,
  showButton: Boolean,
});
</script>

<template>
  <section class="notification-card">
    <div
      class="card"
      :style="{
        backgroundColor: 'rgb(from var(--' + notificationType + '-color) r g b / 15%)',
        borderColor: 'var(--' + notificationType + '-color)',
      }"
    >
      <NotificationIcons :notificationType="notificationType" />
      <div class="card-text">
        <p v-if="showTitle" class="notification-title">A short descriptive header</p>
        <p v-if="showContent" class="notification-details">
          This is a paragh of information with additional supporting detail or links to
          help the user understand what they should do.
        </p>
        <div v-if="showButton" class="notification-buttons">
          <ButtonComponents
            v-if="notificationType == 'info'"
            :buttonType="'secondary-button'"
            :iconLeft="true"
            :iconRight="false"
            :hasIcon="false"
            :hasText="true"
            :buttonColor="'var(--secondary-color)'"
          />
          <ButtonComponents
            v-else
            :buttonType="'secondary-button'"
            :iconLeft="true"
            :iconRight="false"
            :hasIcon="false"
            :hasText="true"
            :buttonColor="'var(--' + notificationType + '-color)'"
          />
          <ButtonComponents
            v-if="notificationType == 'info'"
            :buttonType="'primary-button'"
            :iconLeft="true"
            :iconRight="false"
            :hasIcon="false"
            :hasText="true"
            :buttonColor="'var(--primary-color)'"
          />
          <ButtonComponents
            v-else
            :buttonType="'primary-button'"
            :iconLeft="true"
            :iconRight="false"
            :hasIcon="false"
            :hasText="true"
            :buttonColor="'var(--' + notificationType + '-color)'"
          />
        </div>
      </div>
      <NotificationIcons :notificationType="'close'" />
    </div>
  </section>
</template>

<style scoped>
.notification-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 24px;
  gap: 12px;
  border: 0.8px solid;
}

.card-text {
  color: #1a1a1a;
  text-align: left;
}

.notification-buttons {
  float: left;
  display: flex;
  gap: 16px;
}

.notification-title {
  font-size: 24px;
  font-weight: 600;
}

.notification-details {
  font-size: 24px;
  font-weight: 400;
}

/*********************************** responsive ************************************/
@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  .card {
    width: 50%;
  }
  .notification-buttons {
    flex-direction: column;
  }
}
</style>
