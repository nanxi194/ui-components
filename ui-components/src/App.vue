<script setup>
import { ref } from "vue";
import ButtonTable from "./components/ButtonTable.vue";
import Notifications from "./components/Notifications.vue";
</script>

<template>
  <h1>Buttons</h1>
  <ButtonTable />
  <h1>Notifications</h1>
  <Notifications
    :notificationType="'info'"
    :showTitle="true"
    :showContent="true"
    :showButton="true"
  />
  <br></br>
  <Notifications
    :notificationType="'success'"
    :showTitle="true"
    :showContent="true"
    :showButton="false"
  />
  <br></br>
  <Notifications
    :notificationType="'error'"
    :showTitle="false"
    :showContent="true"
    :showButton="true"
  />
  <br></br>
  <Notifications
    :notificationType="'warning'"
    :showTitle="true"
    :showContent="true"
    :showButton="true"
  />
</template>

<style scoped></style>
