<script setup>
import ButtonComponents from "./ButtonComponents.vue";
</script>

<template>
  <div class="button-card">
    <ul>
      <li>
        <h1>Left icon</h1>
      </li>

      <li>
        <h1>Right icon</h1>
      </li>

      <li>
        <h1>No icon</h1>
      </li>

      <li>
        <h1>icon only</h1>
      </li>
    </ul>

    <ul>
      <li>
        <ButtonComponents
          :buttonType="'secondary-button'"
          :iconLeft="true"
          :iconRight="false"
          :hasIcon="true"
          :hasText="true"
          :buttonColor="'var(--secondary-color)'"
        />
      </li>
      <li>
        <ButtonComponents
          :buttonType="'secondary-button'"
          :iconLeft="false"
          :iconRight="true"
          :hasIcon="true"
          :hasText="true"
          :buttonColor="'var(--secondary-color)'"
        />
      </li>
      <li>
        <ButtonComponents
          :buttonType="'secondary-button'"
          :iconLeft="false"
          :iconRight="false"
          :hasIcon="false"
          :hasText="true"
          :buttonColor="'var(--secondary-color)'"
        />
      </li>
      <li>
        <ButtonComponents
          :buttonType="'secondary-button'"
          :iconLeft="false"
          :iconRight="true"
          :hasIcon="true"
          :hasText="false"
          :buttonColor="'var(--secondary-color)'"
        />
      </li>
    </ul>

    <ul>
      <li>
        <ButtonComponents
          :buttonType="'primary-button'"
          :iconLeft="true"
          :iconRight="false"
          :hasIcon="true"
          :hasText="true"
          :buttonColor="'var(--primary-color)'"
        />
      </li>
      <li>
        <ButtonComponents
          :buttonType="'primary-button'"
          :iconLeft="false"
          :iconRight="true"
          :hasIcon="true"
          :hasText="true"
          :buttonColor="'var(--primary-color)'"
        />
      </li>
      <li>
        <ButtonComponents
          :buttonType="'primary-button'"
          :iconLeft="false"
          :iconRight="false"
          :hasIcon="false"
          :hasText="true"
          :buttonColor="'var(--primary-color)'"
        />
      </li>
      <li>
        <ButtonComponents
          :buttonType="'primary-button'"
          :iconLeft="true"
          :iconRight="false"
          :hasIcon="true"
          :hasText="false"
          :buttonColor="'var(--primary-color)'"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.button-card {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-bottom: 20px;
}
</style>
